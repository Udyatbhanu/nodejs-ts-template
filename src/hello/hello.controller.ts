import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import { Service } from "typedi";
import HelloService from './hello.service';


@Service()
class HelloController implements Controller {
    constructor(private readonly helloService: HelloService) {
        this.initializeRoutes();
    }
    public path = '/hello'
    public router = express.Router();


    private initializeRoutes() {

        this.router.get(`${this.path}`, this.getGreeting);

    }

    /**
     * Admin protected cteate a new Category
     * @param request 
     * @param response 
     */
    private getGreeting = async (request: express.Request, response: express.Response) => {
        try {
            const greeting = await this.helloService.getGreeting()
            response.send({ greeting });

        } catch (error) {
            console.log("Got error", error)
            response.status(400).send("Exception in greeting");
        }

    }


}
export default HelloController
