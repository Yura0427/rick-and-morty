import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes,  setTodo } from "../../redux/reducer";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import TodoItem from "./TodoItem";

export default function MyWatchList() {
  const [find, setFind] = React.useState("");
  const dispatch = useDispatch();


  React.useEffect(() => {
    dispatch(fetchEpisodes(null, find));
  }, [find, dispatch]);

  const { episodes, watchList } = useSelector(({ reducer }) => {
    return {
      episodes: reducer.episodes,
      watchList: reducer.watchList,
    };
  });

  const add = (find) => {
    if (!watchList.find((element) => element.name === find)) {
      dispatch(setTodo(find));
      setFind("");
    } else {
      alert("Such a task already exists");
      setFind("");
    }
  };

  return (
    <>
      <div className="m-3" style={{ margin: "0 auto" }}>
        <InputGroup className="mb-3" style={{ width: "80%", margin: "0 auto" }}>
          <FormControl
            placeholder="Enter episode name"
            list="exampleList"
            onChange={(e) => setFind(e.target.value)}
            value={find}
          />
          <datalist id="exampleList">
            {episodes &&
              episodes.map((episode) => {
                return <option key={episode.id} value={episode.name} />;
              })}
          </datalist>
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={() => add(find)}>
              Add to WatchList
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
      <div className="container">
        <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
          {watchList.length ?
            watchList.map((element) => {
              return <TodoItem key={element.id} element={element} />;
            }): <p>No todos!!!</p>}
        </ul>
      </div>
    </>
  );
}
