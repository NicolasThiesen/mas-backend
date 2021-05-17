import { getRepository } from "typeorm"
import { CourseUnit } from "../models/CourseUnit"

interface UserId{
    id: string;
}

class GetCourseUnitService{

    public async execute({id}:UserId){

        const courseUnitRepository = getRepository(CourseUnit);
        
        const courseUnits = courseUnitRepository.find();

        if(!courseUnits){
            return {
                message: "courses units not found"
            }
        }

        return courseUnits;
    }
}

export {GetCourseUnitService}