import React from "react";
import { Card, Button } from "react-bootstrap";
import CharacterInfo from "./CharacterInfo";

export default function CharactersCard({ character }) {
  const [modalShow, setModalShow] = React.useState(false);
  let { image, name, species, status, gender} = character;
  
  return (
    <>
      <Card style={{ width: "25%" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            <strong>Name:</strong> {name}
          </Card.Title>
          <Card.Text>
            <strong>Species:</strong> {species}
          </Card.Text>
          <Card.Text>
            <strong>Status:</strong> {status}
          </Card.Text>
          <Card.Text>
            <strong>Gender:</strong> {gender}
          </Card.Text>
        </Card.Body>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          See more...
        </Button>
        <CharacterInfo
          show={modalShow}
          onHide={() => setModalShow(false)}
          character={character}
        />
      </Card>
    </>
  );
}
