import React from 'react';
import {Link} from "react-router-dom";

function ContenidoTabla({count, item}){
    return(
        <tr>
            <td>{count}</td>
            {item.values().map((valor)=>(
                <td>{valor}</td>
            ))}
            <td> <Link to={"/"}>{"edit_square"}</Link></td>
        </tr>

    );
}
export default ContenidoTabla;