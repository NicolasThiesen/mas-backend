import {response, Router} from "express";

const routes = Router();

routes.get('/user/', (request, response) => {
    const {nome, idade} = request.query
        response.json({
            idade,
            nome
            })
    })
routes.get("/user/:id", (request, response) => {
            const {id} = request.params;
            response.json({
                userId:id
            })
});

routes.post('/user', (request, response) => {
    const {name, email, password} = request.body
    const user = {
    name,
    email,
    password
    }
    return response.json(user);
})

export default routes;