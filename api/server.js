// serverı buraya yazın ve index.js require yazın
const express = require("express");

const server = express();

server.use(express.json());

server.get("*", (req, res, next) => {
  res.send("<h1>WELCOME TO SPRINT 14 CHALLENGE<h1>");
});

module.exports = server;
