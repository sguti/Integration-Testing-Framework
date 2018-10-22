import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";

const middlewares = [];
const configureStore = () => {
  return createStore(reducer, applyMiddleware(...middlewares));
};

export default configureStore;
