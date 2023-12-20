import React from "react";
import { Button, Col, Image } from "react-bootstrap";

import AleImg from "../../assets/alessio.png"

export default function About() {
  return (
    <Col
      id="about"
      className="d-flex flex-wrap align-items-center justify-content-between mb-4 text-center py-5">
      <div className="col-7">
        <h1 className="text-white">
          Hi, I'm Alessio!
          <br className="d-none d-lg-inline-block" />
          I think coding is a SUPER-POWER!
        </h1>
        <h3 className="mb-4">
            I constantly on the hunt for challenges and opportunities! 
        </h3>
        <div className="d-flex justify-content-center">
          <Button variant="primary" href="#contact" className="me-4">
            Work With Me
          </Button>
          <Button variant="secondary" href="#projects">
            See My Past Work
          </Button>
        </div>
      </div>
      <div className="col-4 mt-4">
        <Image className="w-100 rounded" alt="hero" src={AleImg} />
      </div>
    </Col>
  );
}