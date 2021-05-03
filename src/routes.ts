import {response, Router} from "express";
import { UserController } from "./controller/UserController";
import { ActivyController } from "./controller/ActivyController";
import { CourseUnitController } from "./controller/CourseUnitController";


interface UserRequest{
    name: string;
    email: string;
    password: string;
}

const userController = new UserController();
const activityController = new ActivyController();
const courseUnitController = new CourseUnitController();

const routes = Router();

routes.post("/user", userController.create);
routes.post("/activity", activityController.create);
routes.post("/courseuunit", courseUnitController.create);

export default routes;