import express from "express";
import { renderToString } from "react-dom/server";
// eslint-disable-next-line
import { StaticRouter } from "react-router-dom";
import fs from "fs";
import App from "../src/App";

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/index.html").toString();
const parts = html.split("not rendered");

const app = express();

app.use("/dist", express.static("dist"));
app.use((req, res) => {
  const staticContext = {};
  const reactMarkup = (
    <StaticRouter url={req.url} context={staticContext}>
      <App />
    </StaticRouter>
  );

  res.status(staticContext.statusCode || 200);
  res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
  res.end();
});

// eslint-disable-next-line
console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);
