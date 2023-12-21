import React from "react";
import { Card, Col } from "react-bootstrap";

export default function Projects() {
  return (
    <Col id="project" className="py-5 mb-5 col-12">
      <Col className="d-flex justify-content-center text-center col-12">
        <Col xs={10} md={8}>
          <h2 className="pb-2 border-bottom"> Projects </h2>
        </Col>
      </Col>
      <Col className="d-flex align-items-center justify-content-center pt-3 px-md-5">
        <Col xs={12} sm={9} md={8} lg={5} xxl={4} className="m-4">
          <Card className="tridens-bg text-dark p-5 d-flex justify-content-center rounded-4">
            <Card.Title className="fs-3">PROJECT 1</Card.Title>
            <Card.Text>
              lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum
            </Card.Text>
          </Card>
        </Col>
        <Col xs={12} sm={9} md={8} lg={5} xxl={4} className="m-4">
          <Card className="fidelis-bg text-dark p-5 d-flex justify-content-center rounded-4">
            <Card.Title className="fs-3">PROJECT 2</Card.Title>
            <Card.Text>
              lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
            </Card.Text>
          </Card>
        </Col>
      </Col>
    </Col>
  );
}
