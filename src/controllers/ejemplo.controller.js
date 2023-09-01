//truco para ayudar a visualizar métodos y funciones propias de request y response
//después igualar lo siguiente :  req = request, res = response
import { request, response } from "express";
import { Estudiante } from "../models/ejemplo_model.js";

const findAll = async (req = request, res = response) => {
    try {
        //res.json('listado /estudiantes');
        const arregloEstudiantes = await Estudiante.findAll();
        res.status(200).json(arregloEstudiantes);
    } catch (error) {
        console.log(error.message, error.name);
        res.status(500).json({
            message: error.message,
            code: 500,
            name: error.name,
            mensajePersonalizado: "Error en el servidor",
        });
    }
};

const findByPk = async (req = request, res = response) => {
    try {
        let id = req.params.id;
        id = Number(id);

        console.log(`====> id --> ${id}, tipo ${typeof id}`);
        if (isNaN(id)) {
            //if (typeof(id) === 'number') {
            res.status(400).json({
                code: 400,
                mensajePersonalizado:
                    "Error en el cliente, findByPk estudiante, id no válido",
            });
        } else {
            const estudiante = await Estudiante.findByPk(id);
            //res.json(`estudiante por id /estudiantes/:${id}`);
            res.status(200).json(estudiante);
        }
    } catch (error) {
        console.log(error.message, error.name);
        res.status(500).json({
            message: error.message,
            code: 500,
            name: error.name,
            mensajePersonalizado: "Error en el servidor, findById",
        });
    }
};

const create = (req = request, res = response) => {
    const estudiante = req.body;
    res.json(estudiante);
};

const update = (req = request, res = response) => {
    const estudiante = req.body;
    res.json(estudiante);
    console.log(estudiante);
};

const deleteById = (req = request, res = response) => {
    //TODO implementar deleteById
    const id = req.params.id;
    res.json(`eliminar estudiante con id : ${id}`);
};

export { findAll, findByPk, create, update, deleteById };
