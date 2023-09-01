import { Op } from "sequelize";
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Estudiante = sequelize.define(
    "Estudiante",
    {
        id_estudiante: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        rut: {
            type: DataTypes.STRING(15),
        },
        nombre: {
            type: DataTypes.STRING(30),
        },
        apellido_pat: {
            type: DataTypes.STRING(30),
        },
        apellido_mat: {
            type: DataTypes.STRING(30),
        },
        direccion: {
            type: DataTypes.STRING(100),
        },
        codigo_comuna: {
            type: DataTypes.INTEGER,
        },
        codigo_curso: {
            type: DataTypes.STRING(30),
        },
    },
    {
        tableName: "estudiante",
        createdAt: false,
        updatedAt: false,
    }
);

export { Estudiante };

// en producción no se realiza sync
//Estudiante.sync();
//Estudiante.sync({alter:true});

//para crear un estudiante
// const estudianteUno = Estudiante.build({id_estudiante:1001, nombre: 'prueba uno'});
// const estudianteInsertado = await estudianteUno.save();
// console.log(estudianteInsertado);

//otra forma de crear un registro
//const estudianteUno = await Estudiante.create({id_estudiante:1003, nombre: 'prueba'});
//console.log(estudianteUno);

//Eliminar un determinado registro
/* 
const estudianteUno = Estudiante.build({id_estudiante:1001});
const estudianteEliminado = await estudianteUno.destroy();
console.log(estudianteEliminado); 
*/

//consultar todos los registros
/* const arregloEstudiantes = await Estudiante.findAll();
console.log(arregloEstudiantes); 
*/

//consultar con un like
//[Op.like]: '%hat',                       // LIKE '%hat'
// const estudiantesPrueba = await Estudiante.findAll({
//     where: {
//         nombre:
//         {
//             [Op.like]: '%prueba%'
//         }
//     }
// });
// //console.log(estudiantesPrueba);
// estudiantesPrueba.forEach(estudianteAux => {
//     console.log(estudianteAux.dataValues);
// });
