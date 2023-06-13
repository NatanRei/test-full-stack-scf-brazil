import { FastifyInstance } from "fastify";
import { get } from "./get";
import { find } from "./find";
import { update } from "./update";
import { remove } from "./remove";
import { create } from "./create";

export async function usersRoutes(app: FastifyInstance) {
    app.get('/users', get)
    app.get('/users/:id', find)
    app.post('/users', create)
    app.patch('/users/:id', update)
    app.delete('/users/:id', remove)

}