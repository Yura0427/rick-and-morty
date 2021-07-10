import React from "react";

export default function CharactersCard({episode}) {
  let { id, name, air_date } = episode;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{air_date}</td>
    </tr>
  );
}
