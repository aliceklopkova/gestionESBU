import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import './Navbar.css';

const Navbarapp = () => (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="">
                <img alt="" src={"./logonegro.png"} width="30" height="30" className="d-inline-block align-top"/>
                GEDUCA
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Link style={{textDecoration: "none"}} to="/logout">
                        {/*<span style={{paddingRight: "5px"}} className="material-symbols-outlined">*/}
                        {/*    account_circle*/}
                        {/*</span>*/}
                        <span className="material-symbols-outlined">
                            logout
                        </span>
                    </Link>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Navbarapp;