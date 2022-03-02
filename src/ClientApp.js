import { hydrate } from "react-dom";
// eslint-disable-next-line
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// other stuff that should only happen in the browser like analytics

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
