import React from 'react';
import Alert from 'react-bootstrap/Alert';


function Alerta(){
    return(
        <div>
            <Alert key={'success'} variant={'success'}>
          Se creó correctamente!
        </Alert>
            <Alert key={'success'} variant={'success'}>
          Se creó correctamente!
        </Alert>
        </div>
    );
}
export default Alerta;