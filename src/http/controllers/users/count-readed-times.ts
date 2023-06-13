import { makeCountUserReadedTimesUseCase } from '@/use-cases/factories/make-create-user-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function countReadedTimes( request: FastifyRequest, reply: FastifyReply ) {

    const countReadedTimesParamsSchema = z.object({
        id: z.string().uuid()
    })

    const { id } = countReadedTimesParamsSchema.parse(request.params)
    
    const countReadedTimesUseCase = makeCountUserReadedTimesUseCase()
    const { userReadedTimes } = await countReadedTimesUseCase.execute({id})

    return reply.status(200).send(userReadedTimes)
}