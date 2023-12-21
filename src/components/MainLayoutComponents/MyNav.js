import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function MyNav() {

  return (
    <Navbar
      bg="black"
      variant="dark"
      expand="lg"
      className="sticky-top custom-navbar">
      <Container>
        <Navbar.Brand
          className="me-4 p-0"
          href="/">
          <div className=" logo-container d-flex justify-content-center align-items-center">
             LOGO CODING
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="#home" active={false}>
              Home
            </Nav.Link>
            <Nav.Link className="nav-link" href="#project" active={false}>
              Project
            </Nav.Link>
            <Nav.Link className="nav-link" href="#skills" active={false}>
              Skills
            </Nav.Link>
            <Nav.Link className="nav-link" href="#contact" active={false}>
              Contatti
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
