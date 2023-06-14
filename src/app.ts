import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from './env'
import { usersRoutes } from './http/controllers/users/routes'

export const app = fastify()

app.register(usersRoutes)

app.setErrorHandler((error, _, reply) => {
    if (error instanceof ZodError) {
        return reply
            .status(400)
            .send({ message: 'Validation error.', issues: error.format()})
    }

    if (env.NODE_ENV !== 'production') {
        console.error(error)
    }

    const error_message = error.message ?? 'Internal server error.'
    return reply.status(500).send({ message: error_message})
})