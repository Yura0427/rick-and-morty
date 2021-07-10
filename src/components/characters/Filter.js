import React from "react";
import { Form, Col } from "react-bootstrap";

export default function Filter({ setSpecies, setStatus, setGender }) {
  return (
    <div className="m-2">
      <Form>
        <Form.Row>
          <Form.Group as={Col} >
            <Form.Label>Filter by species</Form.Label>
            <Form.Control onChange={(e) => setSpecies(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} >
            <Form.Label>Filter by status</Form.Label>
            <Form.Control onChange={(e) => setStatus(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} >
            <Form.Label>Filter by dender</Form.Label>
            <Form.Control onChange={(e) => setGender(e.target.value)} />
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}
