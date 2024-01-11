import React from "react";
import { Col } from "react-bootstrap";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Col id="contact" className="py-5 mb-5 col-12">
      <Col className="d-flex justify-content-center text-center col-12">
        <Col xs={10} md={8}>
          <h2 className="pb-2 border-bottom"> Contact </h2>
        </Col>
      </Col>

      <Col className="d-flex align-items-center justify-content-center pt-3 px-md-5">
        <ContactForm />
      </Col>
    </Col>
  );
}
