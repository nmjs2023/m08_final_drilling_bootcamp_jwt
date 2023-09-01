import 'dotenv/config';
import Server from './models/server.js';

/*
(async () ==> {
    console.log("Iniciando aplicación...");
})();
*/

// console.log('Funcionando el start');

const server = new Server();

server.listen();