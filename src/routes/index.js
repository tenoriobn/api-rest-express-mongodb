import express from "express";
import livros from "./livrosRoutes.js";
import routesAutor from "./autoresRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json(), livros, routesAutor);
};

export default routes;