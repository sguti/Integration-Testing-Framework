import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from 'redux-thunk';

const middlewares = [thunk];
const configureStore = () => {
  return createStore(reducer, applyMiddleware(...middlewares));
};

export default configureStore;
