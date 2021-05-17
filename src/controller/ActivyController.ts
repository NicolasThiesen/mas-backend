import { Request, Response } from "express";
import { CreateActivyService } from "../services/CreateActivyService";
import { GetActiviesService } from '../services/GetActiviesService'

class ActivyController {
    async create(request: Request, response: Response){
        const userData = request.body

        const createActivy = new CreateActivyService();

        const actyvy = await createActivy.execute(userData);
        
        return response.json(actyvy);
    }
    async show(request: Request, response: Response){
        const userId = request.body.user;

        const getActivies = new GetActiviesService();

        const actives = await getActivies.execute(userId);

        return response.json(actives);
    }
}


export {ActivyController};