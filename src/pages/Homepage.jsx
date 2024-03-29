import React from "react";
import { Container, Row } from "react-bootstrap";

import MainLayout from "../layout/MainLayout";
import About from "../components/HomePageComponents/About";
import Projects from "../components/HomePageComponents/Projects";
import Skills from "../components/HomePageComponents/Skills";
import Contact from "../components/HomePageComponents/Contact";

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
