import React from 'react';
import {Link, useLocation} from "react-router-dom";
import './Contenidotabla.css';

function ContenidoTabla({count, item, fields}) {
    const location = useLocation()
    return (
        <tr>
            <td>{count}</td>
            {fields.map((field) => (
                <td key={field}>{item[field]}</td>
            ))}
            <td className={'material-symbols-outlined '}>
                <Link className={'icono'} style={{textDecoration: 'none'}}
                    to={`${location.pathname}/${item['ci']}`}>edit_square</Link></td>
            <td className={'material-symbols-outlined '}>
                <Link className={'borrarcolor'} style={{textDecoration: 'none'}} to={`${location.pathname}/${item['ci']}/delete`}>delete</Link>
            </td>
        </tr>

    );
}

export default ContenidoTabla;