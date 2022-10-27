import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import './Customtable.css';
import AtributoTabla from "./Atributostabla";
import ContenidoTabla from "./Contenidotabla";
import tableFieldDescription from "../data/tableFieldDescription";

function BasicTable({atributos, data}) {
    let count = 0;
    var caracter = "#";
    return (
        <div className={'tablesize'}>
            <Table striped bordered hover responsive>
                <thead>
                <tr>
                    <th>{caracter}</th>
                    {atributos.map(atributo => (
                                <AtributoTabla name={tableFieldDescription[atributo]}/>
                            )
                    )}
                </tr>
                </thead>
                <tbody>
                {data.map((item) => {
                    count += 1
                    return (
                        <ContenidoTabla count={count} {...item}/>
                    )
                })}
                </tbody>
            </Table>
        </div>

    );
}

export default BasicTable;