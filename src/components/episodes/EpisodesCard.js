import React from "react";

export default function CharactersCard(props) {
  return (
    <tr>
      <td>{props.episode.id}</td>
      <td>{props.episode.name}</td>
      <td>{props.episode.air_date}</td>
    </tr>
  );
}
