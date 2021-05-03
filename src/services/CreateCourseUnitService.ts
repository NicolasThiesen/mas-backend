import { getRepository } from "typeorm";
import { CourseUnit } from "../models/CourseUnit";

interface UserData{
    name: string;
    description: string;
}

class createCourseUnitService{
    public async execute({name, description}:UserData){
        
        const courseUnitRepository =  getRepository(CourseUnit);

        const courseUnit = {
            name,
            description
        }
        
        await courseUnitRepository.save(courseUnit);
        return courseUnit;
    }
}

export { createCourseUnitService };