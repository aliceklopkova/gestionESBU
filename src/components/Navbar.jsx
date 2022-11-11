import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

function Navbarapp() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="">
                        <img
                            alt=""
                            src={"./logonegro.png"}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        GEDUCA
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to="/logout">Logout</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbarapp;