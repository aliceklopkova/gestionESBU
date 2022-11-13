import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import './Customtable.css';
import AtributoTabla from "./Atributostabla";
import ContenidoTabla from "./Contenidotabla";
import tableFieldDescription from "../data/tableFieldDescription";
import {Link, Outlet, useLocation} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Searchbar from "./Searchbar";
import FilterParams from "./Filterparams";
import {Stack} from "@mui/material";
import FilterForm from "./FilterForm";

const createRow = (item, model) => {
    const row = new model()
    Object.assign(row, item)
    return row
}

function BasicTable({fields, model, api}) {
    const location = useLocation()
    const [data, setData] = useState([])
    const [searchParam, setSearchParam] = useState("")
    const [filterFields, setFilterFields] = useState([])
    const [selectedFilters, setSelectedFilter] = useState([])
    const [filterParams, setFilterParams] = useState({})
    let count = 0;
    var caracter = "#";
    var editar = "Editar";

    useEffect(() => {
        api("filters").get().then((resp)=>{
            setFilterFields(resp.data['filters'])
        })
    })
    useEffect(() => {
        async function fetchData() {
            return await api().list({search: searchParam, ...filterParams})
        }

        fetchData().then((items) => setData(items.data))
        return () => {
            setData([])
        }
    }, [searchParam, filterParams])
    return (
        <div>
            <Stack direction="row" sx={{marginBottom: "20px", marginTop: "30px", marginLeft: "30px"}} spacing={2}>
                <FilterParams filterFields={filterFields} setSelectedFilter={setSelectedFilter} selectedFilters={selectedFilters}/>
                <Searchbar setSearchParam={setSearchParam}/>
            </Stack>
            <FilterForm selectedFilters={selectedFilters} setFilterParams={setFilterParams}/>

            <div className="basic-table">
                <Outlet/>
                {/*<Alerta/>*/}
                <div>
                    <Table striped bordered hover responsive>
                        <thead className={"textoatributo"}>
                        <tr>
                            <th>{caracter}</th>
                            {fields.map(atributo => (
                                    <AtributoTabla key={atributo} name={tableFieldDescription[atributo]}/>
                                )
                            )}
                            <AtributoTabla key="editar" name="Editar"/>
                            <AtributoTabla key="borrar" name="Borrar"/>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((item) => {
                            count += 1
                            return (
                                <ContenidoTabla count={count} fields={fields} item={item} data={data}/>
                            )
                        })}
                        </tbody>
                    </Table>
                    <div className={'button_position'}>
                        <Link className={''} style={{textDecoration: 'none'}}
                              to={`${location.pathname}/add`}>
                            <Button style={{width: '100px'}} variant="dark" type="">Añadir</Button>
                        </Link>

                    </div>
                </div>

            </div>

        </div>


    );
}

export default BasicTable;