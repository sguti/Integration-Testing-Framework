import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
const history = createBrowserHistory();

const middlewares = [routerMiddleware(history), thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  return createStore(
    connectRouter(history)(reducer),
    composeEnhancers(applyMiddleware(...middlewares))
  );
};

export default configureStore;
