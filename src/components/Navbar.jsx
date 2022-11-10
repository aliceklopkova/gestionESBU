import React from 'react';
import ReactDOM from "react-dom/client";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navbarapp () {
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
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarapp;