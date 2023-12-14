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
        </Row>
      </Container>
    </MainLayout>
  );
}
