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
      <Col className="d-flex justify-content-center text-center col-12">
        <Col  >
          <i class="fa-brands fa-react"></i>
        </Col>

        <Col>
          <i class="fa-brands fa-js"></i>
        </Col>

        <Col>
          <i class="fa-brands fa-node"></i>
        </Col>

        <Col>
          <i class="fa-brands fa-bootstrap"></i>
        </Col>

        {/*  <Col>
            <Image src={Express} alt="express" fluid />
          </Col>

          <Col>
            <Image src={Mongo} alt="mongo" fluid />
          </Col> */}
      </Col>
    </Col>
  );
}
