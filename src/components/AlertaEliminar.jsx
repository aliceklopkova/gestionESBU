import React from 'react';
import './AlertaEliminar.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";

function AlertaEliminar({api}) {
    const {id} = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const boton_cancelar_style = {
        border: 'none',
        backgroundColor: "red"
    }
    const handleClick = () => {
        api(id).delete()
        navigate(`/${location.pathname.split("/")[1]}`)
    }
    return (
        <Modal show={true} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title style={{textAlign:"center"}} id="contained-modal-title-vcenter">
                    <div style={{}}>
                        <span style={{color: "red"}} className="material-symbols-outlined">
warning
</span> Eliminar elemento
                    </div>

                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className={'p'}>
                    ¿ Está seguro de que quiere eliminar el elemento ?
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClick}>Aceptar</Button>
                <Link to={`/${location.pathname.split("/")[1]}`}>
                    <Button style={boton_cancelar_style}>Cancelar</Button>
                </Link>
            </Modal.Footer>
        </Modal>
    );
}

export default AlertaEliminar;