import { FastifyInstance } from "fastify";
import { get } from "./get";
import { find } from "./find";
import { update } from "./update";
import { remove } from "./remove";
import { create } from "./create";
import { countReadedTimes } from "./count-readed-times";
import { verifyUserRole } from "@/http/middlewares/verify-user-role";
import { verifyJWT } from "@/http/middlewares/verify-jwt";

export async function usersRoutes(app: FastifyInstance) {
    app.get('/users', get)
    app.get('/users/:id', find)
    app.get('/users/:id/readed-times', countReadedTimes)
    app.post('/users', create)
    app.patch('/users/:id', { onRequest: [verifyJWT, verifyUserRole('ADMIN')]}, update)
    app.delete('/users/:id', { onRequest: [verifyJWT, verifyUserRole('ADMIN')]}, remove)

}