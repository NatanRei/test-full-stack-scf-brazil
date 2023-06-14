import { makeDeleteUserUseCase } from '@/use-cases/factories/make-delete-user-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function remove( request: FastifyRequest, reply: FastifyReply ) {
    const deleteUserParamsSchema = z.object({
        id: z.string().uuid()
    })

    const { id } = deleteUserParamsSchema.parse(request.params)

    const deleteUserUseCase = makeDeleteUserUseCase()
    await deleteUserUseCase.execute({ id })

    return reply.status(204).send()
}