import express from 'express';
import { routerEstudiantes } from '../routes/estudiantes.routes.js';

export default class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();
        this.routes();
    }
    routes() {
        try {
            /*this.app.get('/', (req, res) => {
                res.send('Hello World!')
                })
            */
           this.app.use('/estudiantes', routerEstudiantes);
            
        } catch (error) {
            console.log(error.name, error.message);
            res.status(500).json({
                message: error.message,
                code: 500,
                name: error.name,
                mensajePersonalizado: 'Error en el servidor'
            });
        }
    }
    middlewares(){
        //esto para servir recursos estáticos a través de express
        this.app.use(express.static('public'));
        
        this.app.use(express.json());
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto: ${this.port}`)
        })
    }
}