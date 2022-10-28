import React from 'react';
import Button from 'react-bootstrap/Button';
import './Boton.css';
import {Link} from "react-router-dom";

function BotonAgregar(props) {
  return (
    <>
      <Button variant="dark" >
          {props.link}
      </Button>

    </>
  );
}

export default BotonAgregar;
