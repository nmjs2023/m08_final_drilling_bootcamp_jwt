import { Router } from "express";
import { create, deleteById, findAll, findByPk, update } from "../controllers/estudiantes.controller.js";

const routerEstudiantes = Router();

//ejemplo: localhost/estudiantes
routerEstudiantes.get('/', findAll);

//ejemplo: localhost/estudiantes/1
routerEstudiantes.get('/:id', findByPk);

//para insertar un estudiante
routerEstudiantes.post('/', create);

//para actualizar/update un estudiante
routerEstudiantes.put('/', update);

//para eliminar un estudiante
routerEstudiantes.delete('/:id', deleteById);

export{
    routerEstudiantes
}