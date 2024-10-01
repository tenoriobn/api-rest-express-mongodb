import express from "express";
import AutorController from "../controllers/autorController.js";

const routesAutor = express.Router();

routesAutor.get("/autores", AutorController.listarAutores);
routesAutor.get("/autores/:id", AutorController.listarAutorPorId);
routesAutor.post("/autores", AutorController.cadastrarAutor);
routesAutor.put("/autores/:id", AutorController.atualizarAutor);
routesAutor.delete("/autores/:id", AutorController.excluirAutor);

export default routesAutor;