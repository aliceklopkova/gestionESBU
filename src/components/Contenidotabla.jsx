import React from 'react';

function ContenidoTabla(props){
    console.log(props)
    return(
        <tr>
            {Object.values(props).map((valor)=>(
                <td>{valor}</td>
            ))}
        </tr>

    );
}
export default ContenidoTabla;