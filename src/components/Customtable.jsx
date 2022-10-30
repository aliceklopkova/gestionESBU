import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import './Customtable.css';
import AtributoTabla from "./Atributostabla";
import ContenidoTabla from "./Contenidotabla";
import BotonAgregar from "./Boton";
import tableFieldDescription from "../data/tableFieldDescription";
import {Link} from "react-router-dom";

const createRow = (item, model) => {
    const row = new model()
    Object.assign(row, item)
    return row
}

function BasicTable({fields,model, api}) {
    const [data, setData] = useState([])
    let count = 0;
    var caracter = "#";

    async function fetchData(){
        return await api.list()
    }

    useEffect(() => {
        fetchData().then((items)=> setData(items.data))
    }, [])
    console.log(data)
    return (
        <div>
            <div className={'tablesize'}>
                <Table striped bordered hover responsive>
                    <thead>
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
                            <ContenidoTabla count={count} item={createRow(item, model)}/>
                        )
                    })}
                    </tbody>
                </Table>
                <div className={'button_position'}>
                    <BotonAgregar link={<Link className={'linkboton'} style={{textDecoration: 'none'}}
                                              to={"/estudiante/Formulario"}>{"Añadir"}</Link>}/>
                </div>
            </div>

        </div>


    );
}

export default BasicTable;