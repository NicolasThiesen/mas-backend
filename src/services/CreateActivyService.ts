import {getRepository} from 'typeorm';
import {Activy} from '../models/Activy';

interface ActivyData {
    name: string;
    activy_date: string;
    courseUnitId: string;
    grade: number;
}

class CreateActivyService {
    public async execute({name,activy_date,courseUnitId, grade}:ActivyData): Promise<Activy>{
        
        const activyRepository = getRepository(Activy);

        const activy = activyRepository.create({
            name,
            activy_date,
            grade,
            courseUnitId
        });

        await activyRepository.save(activy)

        return activy;
    }
}

export {CreateActivyService}