import { makeUpdateUserUseCase } from '@/use-cases/factories/make-update-user-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function update( request: FastifyRequest, reply: FastifyReply ) {
    const updateUserParamsSchema = z.object({
        id: z.string().uuid()
    })

    const updateUserBodySchema = z.object({
        name: z.string(),
        job: z.string()
    })
    
    const { id } = updateUserParamsSchema.parse(request.params)
    const { name, job } = updateUserBodySchema.parse(request.body)
    
        const userUseCase = makeUpdateUserUseCase()
        const update = await userUseCase.execute({
            id,
            name,
            job
        })

        if (!update) {
            return reply.status(404).send('User not found.')
        }

    return reply.status(204).send()
}