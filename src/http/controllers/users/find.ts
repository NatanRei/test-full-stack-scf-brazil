import { makeGetUserUseCase } from '@/use-cases/factories/make-get-user-use-case'
import { makeSetUserReadedTimeUseCase } from '@/use-cases/factories/make-set-user-readed-time-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function find( request: FastifyRequest, reply: FastifyReply ) {

    const findUserParamsSchema = z.object({
        id: z.string().uuid()
    })

    const { id } = findUserParamsSchema.parse(request.params)
    
    const findUserUseCase = makeGetUserUseCase()
    const { user } = await findUserUseCase.execute({id})

    if (!user) {
        return reply.code(404).send('User not found.')
    }

    const setUserReadedTime = makeSetUserReadedTimeUseCase()
    await setUserReadedTime.execute(user)

    return reply.status(200).send(
        { 
            ...user,
            password_hash: undefined,
            readed_time: undefined
        }
        )
}