import { makeCreateUserUseCase } from '@/use-cases/factories/make-create-user-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function create( request: FastifyRequest, reply: FastifyReply ) {

    const createUserBodySchema = z.object({
        name: z.string(),
        job: z.string(),
        password: z.string().min(6),
    })

    const { name, job, password } = createUserBodySchema.parse(request.body)
    
        const userUseCase = makeCreateUserUseCase()
        await userUseCase.execute({
            name,
            job,
            password
        })

    return reply.status(201).send()
}