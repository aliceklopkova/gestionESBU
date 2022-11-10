import React from 'react';
import {Link, useLocation} from "react-router-dom";
import './Contenidotabla.css';

function ContenidoTabla({count, item}) {
    const location = useLocation()
    return (
        <tr>
            <td>{count}</td>
            {item.values().map((valor) => (
                <td>{valor}</td>
            ))}
            <td className={'material-symbols-outlined '} style={{padding: "20px"}}>
                <Link className={'icono'} style={{textDecoration: 'none'}}
                    to={`${location.pathname}/${item['ci']}`}>edit_square</Link>
                <Link className={'borrarcolor'}
                      style={{textDecoration: 'none'}}
                      to={`${location.pathname}/${item['ci']}/delete`}>delete</Link></td>
        </tr>

    );
}

export default ContenidoTabla;