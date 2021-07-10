import React from "react";
import { Table, InputGroup, FormControl } from "react-bootstrap";
import { Preloader } from "../preloader/Preloader";
import Pagination from "../pagination/Pagination";
import EpisodesCard from "./EpisodesCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "../../redux/reducer";

export default function Episodes() {
  const [loaing, setLoading] = React.useState(true);
  const [active, setActive] = React.useState(1);
  const [name, setName] = React.useState();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const promises = [];
    promises.push(dispatch(fetchEpisodes(active, name)));
    Promise.all(promises)
      .then(() => {
        // console.log("vse ok");
      })
      .catch((err) => {
        console.log("Failed fetching ", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [active, name, dispatch]);

  const { episodes, info } = useSelector(({ reducer }) => {
    return {
      episodes: reducer.episodes,
      info: reducer.requestInfo,
    };
  });

  if (loaing) return <Preloader />;

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>
                <InputGroup size="sm">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <strong>Name</strong>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Enter name to filter"
                    onChange={(e) => setName(e.target.value)}
                  />
                </InputGroup>
              </th>
              <th>Air date</th>
            </tr>
          </thead>
          <tbody>
            {episodes &&
              episodes.map((episode) => {
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
