import { Service } from "typedi";

@Service()
class HelloService {

    constructor() { }

    async getGreeting(): Promise<String> {
        return "Hello"
    }

}
export default HelloService