import React from "react";
import { Col, Image } from "react-bootstrap";
import Express from "../../assets/express.png";
import Mongo from "../../assets/MongoDB.png";

export default function Skills() {
  return (
    <Col id="skills" className="py-5 mb-5 col-12">

      <Col className="d-flex justify-content-center text-center col-12">
        <Col xs={10} md={8}>
          <h2 className="pb-2 border-bottom"> Skills </h2>
        </Col>
      </Col>

      <Col className="d-flex justify-content-center  flex-wrap text-center col-12">

        <Col xs={6} md={4} lg={3} className="icon-font pt-5">
          <i class="fa-brands fa-react"  ></i>
        </Col>

        <Col xs={6} md={4} lg={3} className="icon-font pt-5">
          <i class="fa-brands fa-js"></i>
        </Col>

        <Col xs={6} md={4} lg={3} className="icon-font pt-5">
          <i class="fa-brands fa-node"></i>
        </Col>

        <Col xs={6} md={4} lg={3} className="icon-font pt-5">
          <i class="fa-brands fa-bootstrap"></i>
        </Col>

        <Col xs={6} md={4} lg={3} className="d-flex justify-content-center align-items-center pt-5">
          <Image id="express-logo" src={Express} alt="express" fluid className="img-fluid" />
        </Col>

        <Col xs={6} md={4} lg={3}className="d-flex justify-content-center align-items-center pt-5">
          <Image id="mongo-logo" src={Mongo} alt="mongo-db" fluid className="img-fluid" />
        </Col> 

      </Col>
    </Col>
  );
}
