import axios from "axios";
import React from "react";
import { Table } from "react-bootstrap";
import { Preloader } from "../preloader/Preloader";
import Pagination from "../pagination/Pagination";
import LocationsCard from "./LocationsCard";

export default function Locations() {
  const [results, setResults] = React.useState([]);
  const [loaing, setLoading] = React.useState(true);
  const [active, setActive] = React.useState(1);
  const [info, setInfo] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location?page=${active}`)
      .then((resp) => {
        // console.log(resp.data.info);
        setResults(resp.data.results);
        setInfo(resp.data.info);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [active]);
  if (loaing) return <Preloader />;

  //   let { name, type, dimension } = results;
//   console.log(results);
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Type</th>
              <th>Dimension</th>
            </tr>
          </thead>
          <tbody>
            {results &&
              results.map((location) => {
                let { name, type, dimension, id } = location;
                return (
                  <LocationsCard
                    key={id}
                    id={id}
                    name={name}
                    type={type}
                    dimension={dimension}
                  />
                );
              })}
          </tbody>
        </Table>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination info={info} active={active} setActive={setActive} />
      </div>
    </>
  );
}
