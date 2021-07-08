import React from 'react'

export default function LocationsCard({ name, type, dimension, id}) {
    // console.log(children)
    return (
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{type}</td>
          <td>{dimension}</td>
        </tr>
      );
}
