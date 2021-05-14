import {response, Router} from "express";
import { UserController } from "./controller/UserController";
import { ActivyController } from "./controller/ActivyController";
import { CourseUnitController } from "./controller/CourseUnitController";
import { AuthenticateController } from "./controller/AuthenticateController";
import authenticated from "./middlewares/authenticated";


interface UserRequest{
    name: string;
    email: string;
    password: string;
}

const userController = new UserController();
const activityController = new ActivyController();
const courseUnitController = new CourseUnitController();
const authenticateController = new AuthenticateController();

const routes = Router();

routes.post("/auth", authenticateController.create);
routes.post("/user", userController.create);
routes.post("/activy", authenticated , activityController.create);
routes.post("/courseuunit", authenticated, courseUnitController.create);

export default routes;