import axios from "axios";
import React from "react";
import { Table } from "react-bootstrap";
import { Preloader } from "../preloader/Preloader";
import Pagination from "../pagination/Pagination";
import EpisodesCard from "./EpisodesCard";

export default function Episodes() {
  const [results, setResults] = React.useState([]);
  const [info, setInfo] = React.useState([]);
  const [loaing, setLoading] = React.useState(true);
  const [active, setActive] = React.useState(1);

  React.useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/?page=${active}`)
      .then((resp) => {
        console.log(resp.data.results);
        console.log(resp.data.info);
        setResults(resp.data.results);
        setInfo(resp.data.info);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [active]);
  if (loaing) return <Preloader />;

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Air date</th>
            </tr>
          </thead>
          <tbody>
            {results &&
              results.map((episode) => {
                return <EpisodesCard key={episode.id} episode={episode} />;
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
