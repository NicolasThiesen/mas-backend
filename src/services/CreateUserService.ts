import { getRepository } from "typeorm";
import { User } from "../models/Users";
import { hash } from "bcryptjs";

interface UserData{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    public async execute({name, email, password}:UserData): Promise<User | {}>{
        
        const usersRepository =  getRepository(User);

        const checkUserExists = await usersRepository.findOne({email});

        if(checkUserExists){
           return {
               error: "Email addres already exist"
           };
        }

        const hashedPassword = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            password: hashedPassword
        });
        
        await usersRepository.save(user);
        return user;
    }
}

export { CreateUserService };