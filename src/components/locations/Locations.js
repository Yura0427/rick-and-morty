import React from "react";
import { Table, InputGroup, FormControl } from "react-bootstrap";
import { Preloader } from "../preloader/Preloader";
import Pagination from "../pagination/Pagination";
import LocationsCard from "./LocationsCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocations } from "../../redux/reducer";

export default function Locations() {
  const [loaing, setLoading] = React.useState(true);
  const [active, setActive] = React.useState(1);
  const [name, setName] = React.useState();
  const [type, setType] = React.useState();
  const [dimension, setDimension] = React.useState();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const promises = [];
    promises.push(dispatch(fetchLocations(active, name, type, dimension)));
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
  }, [active, name, type, dimension, dispatch]);

  const { locations, info } = useSelector(({ reducer }) => {
    return {
      locations: reducer.locations,
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
              <th>
                <InputGroup size="sm">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <strong>Type</strong>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Enter type to filter"
                    onChange={(e) => setType(e.target.value)}
                  />
                </InputGroup>
              </th>
              <th>
                <InputGroup size="sm">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <strong>Dimension</strong>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Enter dimension to filter"
                    onChange={(e) => setDimension(e.target.value)}
                  />
                </InputGroup>
              </th>
            </tr>
          </thead>
          <tbody>
            {locations &&
              locations.map((location) => {
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
