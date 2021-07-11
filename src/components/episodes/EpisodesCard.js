import React from "react";

export default function CharactersCard({episode}) {
  let { id, name, air_date } = episode;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{episode.episode.split(/(?=[A-Z])/)[0].slice(1)}</td>
      <td>{episode.episode.split(/(?=[A-Z])/)[1].slice(1)}</td>
      <td>{air_date}</td>
    </tr>
  );
}
