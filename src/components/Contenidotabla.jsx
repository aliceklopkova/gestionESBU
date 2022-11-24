import React from 'react';
import {Link, useLocation} from "react-router-dom";
import './Contenidotabla.css';
import tableFieldDescription from "../data/tableFieldDescription";
import CustomCell from "./table-cells/CustomCell";


function ContenidoTabla({count, item, fields}) {
    const location = useLocation()
    return (
        <tr>
            {fields.map((field) => <CustomCell key={field} data={item[field]} description={tableFieldDescription[field]}/>)}
            <td className={'material-symbols-outlined '}>
                <Link className={'icono'} style={{textDecoration: 'none'}}
                      to={`${location.pathname}/${item['id']}`}>edit_square</Link></td>
            <td className={'material-symbols-outlined '}>
                <Link className={'borrarcolor'} style={{textDecoration: 'none'}}
                      to={`${location.pathname}/${item['id']}/delete`}>delete</Link>
            </td>
        </tr>

    );
}

export default ContenidoTabla;