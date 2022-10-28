import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './Campoformulario.css';

function CampoFormulario({data}) {
    return (
        <div className={'posicion'}>
            <Form.Group className="mb-3" lg="6" md="6" sm="6" controlId={data.id}>
                <Form.Label>{data.name}</Form.Label>
                <Form.Control type={data.type} placeholder={data.secondEntry}/>
                <Form.Text className="text-muted">
                    {data.text}
                </Form.Text>
            </Form.Group>
        </div>
    );
}

export default CampoFormulario;