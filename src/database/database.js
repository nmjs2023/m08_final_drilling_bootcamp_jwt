import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "postgres://postgres:<pwd>@localhost:5432/<nombre_bd>"
);

//Testear conexion a la BD
//descomentar y ejecutar
//node .\src\database\database.js

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

export { sequelize };
