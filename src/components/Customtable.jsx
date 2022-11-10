import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import './Customtable.css';
import AtributoTabla from "./Atributostabla";
import ContenidoTabla from "./Contenidotabla";
import tableFieldDescription from "../data/tableFieldDescription";
import {Link, Outlet, useLocation} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Alerta from "./Mensaje";

const createRow = (item, model) => {
    const row = new model()
    Object.assign(row, item)
    return row
}

function BasicTable({fields, model, api}) {
    const location = useLocation()
    const [data, setData] = useState([])
    let count = 0;
    var caracter = "#";
    var editar = "Editar";

    async function fetchData() {
        return await api().list()
    }

    useEffect(() => {
        fetchData().then((items) => setData(items.data))
    }, [])
    console.log(data)
    return (
        <div class="basic-table">
            <Outlet/>
            <Alerta/>
            <div className={'tablesize'}>
                <Table striped bordered hover responsive>
                    <thead className={"textoatributo"}>
                    <tr>
                        <th>{caracter}</th>
                        {fields.map(atributo => (
                                <AtributoTabla name={tableFieldDescription[atributo]}/>
                            )
                        )}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item) => {
                        count += 1
                        return (
                            <ContenidoTabla count={count} item={createRow(item, model)} data={data}/>
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


    );
}

export default BasicTable;