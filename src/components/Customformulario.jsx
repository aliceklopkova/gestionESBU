import React, {useState} from 'react';
import './Customformulario.css';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import CampoFormulario from "./Campoformulario";
import AtributoTabla from "./Atributostabla";
import tableFieldDescription from "../data/tableFieldDescription";
import formFieldDescription from "../data/formFieldDescription";

function CustomForm({atributos}) {
    return (
        <div className={'Formsize'}>
            <Form>
                <div>
                    {atributos.map((item) => (
                            <CampoFormulario key={item} data={formFieldDescription[item]}/>
                        )
                    )}
                </div>
                <div className={'Botonsubmit'}>
                    <Button style={{width: '100px'}} variant="success" type="submit">Submit</Button>
                </div>

            </Form>
        </div>
    );
}


export default CustomForm;