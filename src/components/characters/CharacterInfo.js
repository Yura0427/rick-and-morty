import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function CharacterInfo({ show, onHide, character }) {
  let { name, image, origin, location, gender, status, species, type } =
    character;
  return (
    <Modal
      show={show}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>
          <strong>Name:</strong> {name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ display: "flex" }}>
          <div>
            <img alt={name} src={image} style={{ maxWidth: "100%" }} />
          </div>
          <div>
            <ul>
              <li>
                <strong>Origin:</strong> {origin.name}
              </li>
              <li>
                <strong>Location:</strong> {location.name}
              </li>
              <li>
                <strong>Gender:</strong> {gender}
              </li>
              <li>
                <strong>Species:</strong> {species}
              </li>
              <li>
                <strong>Status:</strong> {status}
              </li>
              <li>
                <strong>Type:</strong> {type ? type : "unknown"}
              </li>
            </ul>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
