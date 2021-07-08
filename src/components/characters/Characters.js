import axios from "axios";
import React from "react";
import { Preloader } from "../preloader/Preloader";
import Pagination from "../pagination/Pagination";
import CharactersCard from "./CharactersCard";

export default function Characters() {
  const [results, setResults] = React.useState([]);
  const [info, setInfo] = React.useState([]);
  const [loaing, setLoading] = React.useState(true);
  const [active, setActive] = React.useState(1);

  React.useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character?page=${active}`)
    .then((resp) => {
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
        {results &&
          results.map((chars, id) => {
            return <CharactersCard key={id} chars={chars} />;
          })}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination info={info} active={active} setActive={setActive} />
      </div>
    </>
  );
}
