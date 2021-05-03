import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CourseUnitController {
    async create(request: Request, response: Response){
        const userData = request.body

        const createCourseUnit = new CreateUserService();

        const courseUnit = await createCourseUnit.execute(userData);
        
        return response.json(courseUnit);
    }

}


export {CourseUnitController};