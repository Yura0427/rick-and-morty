import React from "react";
import { Preloader } from "../preloader/Preloader";
import Pagination from "../pagination/Pagination";
import CharacterCard from "./CharacterCard";
import Filter from "./Filter";
import { fetchCharacters } from "../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";



export default function Characters() {
  const [loaing, setLoading] = React.useState(true);
  const [active, setActive] = React.useState(1);
  const [species, setSpecies] = React.useState();
  const [status, setStatus] = React.useState();
  const [gender, setGender] = React.useState();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const promises = [];
    promises.push(dispatch(fetchCharacters(active, species, status, gender)));
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
  }, [active, species, status, gender, dispatch]);

  const { characters, info } = useSelector(({ reducer }) => {
    return {
      characters: reducer.characters,
      info: reducer.requestInfo,
    };
  });

  if (loaing) return <Preloader />;

  return (
    <>
      <Filter
        setSpecies={setSpecies}
        setStatus={setStatus}
        setGender={setGender}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {characters &&
          characters.map((character) => {
            return <CharacterCard key={character.id} character={character} />;
          })}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination info={info} active={active} setActive={setActive} />
      </div>
    </>
  );
}

