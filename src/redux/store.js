import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";
import { load, save } from "redux-localstorage-simple";

let reducers = combineReducers({
  reducer: reducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  reducers,
  load({ states: ["reducer.watchList"], namespace: "" }),
  composeEnhancers(
    applyMiddleware(
      save({
        states: ["reducer.watchList"],
        namespace: "",
      }),
      thunk
    )
  )
);

window.store = store;
export default store;
