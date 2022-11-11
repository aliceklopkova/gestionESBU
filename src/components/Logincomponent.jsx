import React from 'react';
import {Col, Button, Row, Container, Card, Form} from "react-bootstrap";
import './Logincomponent.css';
import Auth from "../api/auth";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../redux/user/userSlice"
import Footer from "./Footer";

function LoginComponente() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const username = data.get("username")
        const password = data.get("password")
        Auth.login(username, password).then(()=>{
            dispatch(login())
            navigate("/home")
        })

    }
    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center ">
                    <Col style={{marginTop: "94px"}} md={8} lg={6} xs={12}>
                        <div>

                        </div>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 style={{textAlign: "center"}}
                                        className="fw-bold mb-2 text-uppercase ">Bienvenido <img
                                        alt=""
                                        src={"./logoblanco.png"}
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                    /></h2>
                                    <p style={{textAlign: "center"}} className=" mb-5">Por favor escriba su usuario y
                                        contraseña para autenticarse!</p>
                                    <div className="mb-3">
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3"
                                                        controlId="formBasicEmail">
                                                {/*<Form.Label >*/}
                                                {/*    Usuario*/}
                                                {/*</Form.Label>*/}
                                                <Form.Control size="lg" name="username" placeholder="Usuario*" type="text" required/>
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                {/*<Form.Label>Contraseña</Form.Label>*/}
                                                <Form.Control name="password" size="lg" type="password" placeholder="Contraseña*"
                                                              required/>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Recordar"/>
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button variant="success" type="submit">
                                                    Iniciar sesión
                                                </Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                     <Footer/>
                </Row>

            </Container>


        </div>
    );
}

export default LoginComponente;