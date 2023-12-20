import React from "react";
import { Container, Row } from "react-bootstrap";

import MainLayout from "../layout/MainLayout";

export default function Homepage() {
  return (
    <MainLayout>
      <Container id="home" fluid>
        <Row>
          {/* ELEMENTS */}
          <About />
          <Projects />
          <Skills />
          <Contact />
        </Row>
      </Container>
    </MainLayout>
  );
}
