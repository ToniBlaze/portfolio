import React from "react";
import { Container, Row } from "react-bootstrap";

import MainLayout from "../layout/MainLayout";

export default function Homepage() {
  return (
    <MainLayout>
      <Container id="home" fluid>
        <Row>
        {/* ELEMENTS */}
        <h1>Hi! I'm Alessio!</h1>
        <h3>Who i am</h3>
        <h3>Project</h3>
        <h3>Contact</h3>
        </Row>
      </Container>
    </MainLayout>
  );
}
