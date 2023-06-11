import { FastifyInstance } from "fastify";
import { getUsers } from "./controllers/user";

export async function appRoutes(app: FastifyInstance) {
    app.get('/users', getUsers)
}