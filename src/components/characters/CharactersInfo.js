import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Preloader } from "../preloader/Preloader";

export default function CharactersInfo(props) {
  const [character, setCharacter] = React.useState();
  const [loaing, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${props.match.params.id}`)
      .then((resp) => {
        console.log(resp.data);
        setCharacter(resp.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loaing) return <Preloader />;

  console.log(character);
  let { name, image, origin, location, gender, status, species } = character;

  return (
    <div className="container">
      <br />
      <h3>{name}</h3>
      <hr />
      <div style={{display:'flex'}}>
        <div>
          <img alt={name} src={image} />
        </div>
        <div>
          <ul className="collection">
            <li className="collection-item">
              <strong>Origin:</strong> {origin.name}
            </li>
            <li className="collection-item">
              <strong>Location:</strong> {location.name}
            </li>
            <li className="collection-item">
              <strong>Gender:</strong> {gender}
            </li>
            <li className="collection-item">
              <strong>Species:</strong> {species}
            </li>
            <li className="collection-item">
              <strong>Status:</strong> {status}
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <Link to="/characters">Back</Link>
    </div>
  );
}
