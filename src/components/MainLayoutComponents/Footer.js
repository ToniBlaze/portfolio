import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <Container fluid>
    <Row className="d-flex flex-wrap justify-content-around align-items-center pb-5 pt-4 border-top bg-black text-secondary">
      <Col md={4} className="mb-0 text-secondary">
        Hey! 
        Let's stay in touch.
      </Col>

      <Col md={4} className="d-flex justify-content-center">
        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-secondary">
              Project
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-secondary">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-secondary">
              Contact
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  </Container>
  )
}
