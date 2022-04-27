import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors';
import Controller from './interfaces/controller.interface';


class App {
    public app: express.Application;

    constructor(controllers: Controller[]) {
        this.app = express();
        this.configureCors()
        this.initializeMiddleware()
        this.initializeControllers(controllers);
        this.connectDatabase()


    }
    /**
   * Called from app, will listen to the port defined in .env
   */
    public listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`App listening on the port ${process.env.PORT}`);
        });
    }


    /**
     * Initialize CORS.
     */
    private configureCors() {
        const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];

        const options: cors.CorsOptions = {
            origin: allowedOrigins
        };
        console.log(`Allowed orgins`, allowedOrigins)
        this.app.use(cors(options));

    }


    /**
     * Put your middleware here.
     */
    private initializeMiddleware() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    /**
   * Initialize controllers
   * @param controllers 
   */
    private initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }

    /**
  * Connect Db
  */
    private connectDatabase() {

    }


}
export default App;