import { makeGetUserUseCase } from '@/use-cases/factories/make-get-user-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function find( request: FastifyRequest, reply: FastifyReply ) {

    const findUserParamsSchema = z.object({
        id: z.string().uuid()
    })

    const { id } = findUserParamsSchema.parse(request.params)
    
    const findUserUseCase = makeGetUserUseCase()
    const { user } = await findUserUseCase.execute({id})

    return reply.status(200).send(user)
}