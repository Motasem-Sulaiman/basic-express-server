"use strict";

const express = require("express");
const app = express();
const notFound = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");
const logger = require("./middleware/logger");
const validator = require("./middleware/validator");
app.use(logger);

app.get("/", (req, res) => {
  res.status(200).send("hello");
});

app.get("/person", validator, (req, res) => {
  const name = req.query.name;
  res.json({
    name: name,
  });
});

app.use("*", notFound);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => {
    console.log(`server is ready on ${port}`);
  });
}

module.exports = {
  start: start,
  app: app,
};
