import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CharactersCard({ chars }) {
  return (
    <>
      <Card style={{ width: "20%" }}>
        <Card.Img variant="top" src={chars.image} />
        <Card.Body>
          <Card.Title>Name: {chars.name}</Card.Title>
          <Card.Text>Species: {chars.species}</Card.Text>
          <Card.Text>Status: {chars.status}</Card.Text>
          <Card.Text>Gender: {chars.gender}</Card.Text>
        </Card.Body>
        <Link className="btn btn-info" to={`/characters/${chars.id}`}>
          See more...
        </Link>
      </Card>
    </>
  );
}
