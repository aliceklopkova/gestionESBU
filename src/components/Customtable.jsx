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

function BasicTable({fields, model, api}) {
    const location = useLocation()
    const [data, setData] = useState([])
    const [searchParam, setSearchParam] = useState("")
    const [filterFields, setFilterFields] = useState([])
    const [selectedFilters, setSelectedFilter] = useState([])
    const [filterParams, setFilterParams] = useState({})

    useEffect(() => {
        api("filters").get().then((resp) => {
            setFilterFields(resp.data['filters'])
        })
    }, [location])
    useEffect(() => {
        async function fetchData() {
            return await api().list({search: searchParam, ...filterParams})
        }

        fetchData().then((items) => setData(items.data))
        return () => {
            setData([])
        }
    }, [searchParam, filterParams, location, selectedFilters])


    return (
        <div>
            <Stack direction="row" sx={{marginBottom: "20px", marginTop: "30px", marginLeft: "30px"}} spacing={2}>
                <FilterParams filterFields={filterFields} setSelectedFilter={setSelectedFilter}
                              selectedFilters={selectedFilters}/>
                <Searchbar setSearchParam={setSearchParam}/>
            </Stack>
            <FilterForm selectedFilters={selectedFilters} filterParams={filterParams} setFilterParams={setFilterParams}/>

            <div className="basic-table">
                <Outlet/>
                {/*<Alerta/>*/}
                <div>
                    <Table striped bordered hover responsive>
                        <thead className={"textoatributo"}>
                        <tr>
                            {fields.map(atributo => (
                                    <AtributoTabla key={atributo} name={tableFieldDescription[atributo].label}/>
                                )
                            )}
                            <AtributoTabla key="editar" name="Editar"/>
                            <AtributoTabla key="borrar" name="Borrar"/>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((item) => {
                            return (
                                <ContenidoTabla key={item['id']} fields={fields} item={item} data={data}/>
                            )
                        })}
                        </tbody>
                    </Table>
                    <div className={'button_position'}>
                        <Link className={''} style={{textDecoration: 'none'}}
                              to={`${location.pathname}/add`}>
                            <Button style={{width: '100px'}} variant="dark" type="">A??adir</Button>
                        </Link>

                    </div>
                </div>

            </div>

        </div>


    );
}

export default BasicTable;