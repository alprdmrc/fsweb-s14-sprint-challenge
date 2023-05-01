// serverı buraya yazın ve index.js require yazın
const express = require("express");
const resourceRouter = require("./resource/router");
const projectRouter = require("./project/router");
const taskRouter = require("./task/router");

const server = express();

server.use(express.json());

server.use("/api/resources", resourceRouter);
server.use("/api/projects", projectRouter);
server.use("/api/tasks", taskRouter);

server.get("/", (req, res, next) => {
  res.send("<h1>WELCOME TO SPRINT 14 CHALLENGE<h1>");
});

module.exports = server;
