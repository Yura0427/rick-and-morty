import axios from "axios";

const SET_CHARACTERS = "characters/SET_CHARACTERS";
const SET_EPISODES = "episodes/SET_EPISODES";
const SET_LOCATIONS = "locations/SET_LOCATIONS";
const SET_WATCHLIST = "watchList/SET_WATCHLIST";
const SET_TOGGLE = "watchList/SET_TOGGLE";
const SET_DELETE = "watchList/SET_DELETE";
const SET_REQUESTINFO = "requestInfo/SET_REQUESTINFO";
const API_URL = "https://rickandmortyapi.com/api/";

let initialState = {
  characters: [],
  episodes: [],
  locations: [],
  requestInfo: {},
  watchList: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case SET_EPISODES:
      return {
        ...state,
        episodes: action.payload,
      };
    case SET_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
      };
    case SET_WATCHLIST:
      return {
        ...state,
        watchList: [...state.watchList, action.payload],
      };
    case SET_TOGGLE:
      return {
        ...state,
        watchList: state.watchList.map((todo) => {
          if (todo.id === action.payload) return { ...todo, done: !todo.done };
          return todo;
        }),
      };
    case SET_DELETE:
      return {
        ...state,
        watchList: state.watchList.filter((todo) => todo.id !== action.payload),
      };
    case SET_REQUESTINFO:
      return {
        ...state,
        requestInfo: action.payload,
      };
    default:
      return state;
  }
};

const setCharacters = (items) => ({
  type: SET_CHARACTERS,
  payload: items,
});
const setRequestInfo = (items) => ({
  type: SET_REQUESTINFO,
  payload: items,
});
const setEpisodes = (items) => ({
  type: SET_EPISODES,
  payload: items,
});
const setLocations = (items) => ({
  type: SET_LOCATIONS,
  payload: items,
});
const setWatchList = (items) => ({
  type: SET_WATCHLIST,
  payload: items,
});
const setTogle = (items) => ({
  type: SET_TOGGLE,
  payload: items,
});
const setDelete = (items) => ({
  type: SET_DELETE,
  payload: items,
});

export const fetchCharacters =
  (active, species, status, gender) => (dispatch) => {
    let url = `${API_URL}character/?page=${active}`;
    if (species) url += `&species=${species}`;
    if (status) url += `&status=${status}`;
    if (gender) url += `&gender=${gender}`;
    if (species && status) url += `&species=${species}&status=${status}`;
    if (species && gender) url += `&species=${species}&gender=${gender}`;
    if (status && gender) url += `&status=${status}&gender=${gender}`;
    if (species && status && gender)
      url += `&species=${species}&status=${status}&gender=${gender}`;
    return axios
      .get(url)
      .then((resp) => {
        dispatch(setCharacters(resp.data.results));
        dispatch(setRequestInfo(resp.data.info));
      })
      .catch((err) => console.error(err));
  };

export const fetchEpisodes = (active, name) => (dispatch) => {
  let url = `${API_URL}episode?page=${active}`;
  if (name) url += `&name=${name}`;
  return axios
    .get(url)
    .then((resp) => {
      dispatch(setEpisodes(resp.data.results));
      dispatch(setRequestInfo(resp.data.info));
    })
    .catch((err) => console.error(err));
};

export const fetchLocations = (active, name, type, dimension) => (dispatch) => {
  let url = `${API_URL}location?page=${active}`;
  if (name) url += `&name=${name}`;
  if (type) url += `&type=${type}`;
  if (dimension) url += `&dimension=${dimension}`;
  if (name && type) url += `&name=${name}&type=${type}`;
  if (name && dimension) url += `&name=${name}&dimension=${dimension}`;
  if (type && dimension) url += `&type=${type}&dimension=${dimension}`;
  if (name && type && dimension)
    url += `&name=${name}&type=${type}&dimension=${dimension}`;

  return axios
    .get(url)
    .then((resp) => {
      dispatch(setLocations(resp.data.results));
      dispatch(setRequestInfo(resp.data.info));
    })
    .catch((err) => console.error(err));
};

export const setTodo = (todoName) => (dispatch) => {
  if (todoName)
    axios
      .get(`https://rickandmortyapi.com/api/episode?name=${todoName}`)
      .then((resp) => {
        dispatch(setWatchList({ ...resp.data.results[0], done: false }));
      })
      .catch((err) => console.error(err));
};

export const togleTodo = (todoId) => (dispatch) => {
  dispatch(setTogle(todoId));
};

export const deleteTodo = (todoId) => (dispatch) => {
  dispatch(setDelete(todoId));
};
