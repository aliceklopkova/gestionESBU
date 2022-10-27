import React from 'react';
import ContenidoTabla from "./Contenidotabla";

function ReglonTabla(props){
    return(
        <tr>
            {props.map(elemento=>(
                <ContenidoTabla na/>
            ))}
        </tr>
    );
}
export default ReglonTabla;