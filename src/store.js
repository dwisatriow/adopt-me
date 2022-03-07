// eslint-disable-next-line
import { createStore } from "redux";
import reducer from "./reducer/index";

const store = createStore(
  reducer,
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENTSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENTSION__()
    : (f) => f
);

export default store;