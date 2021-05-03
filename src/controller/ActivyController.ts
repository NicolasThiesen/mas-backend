import { Request, Response } from "express";
import { CreateActivyService } from "../services/CreateActivyService";

class ActivyController {
    async create(request: Request, response: Response){
        const userData = request.body

        const createActivy = new CreateActivyService();

        const actyvy = await createActivy.execute(userData);
        
        return response.json(actyvy);
    }

}


export {ActivyController};