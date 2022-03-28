import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import middleware from "./middleware/middleware";
import reducer from "./reducers/reducer";

export const configureStore = (service) =>
  createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware.map((f) => f(service))))
  );
