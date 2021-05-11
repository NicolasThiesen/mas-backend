import { Request, Response } from "express";
import { CreateCourseUnitService } from "../services/CreateCourseUnitService";

class CourseUnitController {
    async create(request: Request, response: Response){
        const userData = request.body

        const createCourseUnit = new CreateCourseUnitService();

        const courseUnit = await createCourseUnit.execute(userData);
        
        return response.json(courseUnit);
    }

}


export {CourseUnitController};