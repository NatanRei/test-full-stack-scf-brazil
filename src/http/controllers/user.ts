import { FastifyRequest, FastifyReply } from 'fastify'
import { users } from '../../mocks/users'
import { z } from 'zod'

export async function getUsers( _: FastifyRequest, reply: FastifyReply ) {
    return reply.status(201).send(users)
}

export async function getUserById( request: FastifyRequest, reply: FastifyReply ) {

    const getUserByIdBodySchema = z.object({
        id: z.coerce.number(),
    })
    const { id } = getUserByIdBodySchema.parse(request.query)

    const user = users.find(user => user.id === id)

    if (!user) {
        return reply.status(404).send('User not found.')
    }

    return reply.status(200).send(user)
}

export async function deleteUserById( request: FastifyRequest, reply: FastifyReply ) {
    const registerBodySchema = z.object({
        id: z.coerce.number(),
    })

    const { id } = registerBodySchema.parse(request.query)
    const userIndex = users.findIndex(user => user.id === id)
    console.log(id, userIndex)
    if (userIndex === undefined) {
        return reply.status(404).send('User not found.')
    }

    users.slice(userIndex, 1)
    return reply.status(200).send()
}

// export async function getUser( request: FastifyRequest, reply: FastifyReply ) {
//     const registerBodySchema = z.object({
//         name: z.string(),
//         email: z.string().email(),
//         password: z.string().min(6)
//     })

//     const { name, email, password } = registerBodySchema.parse(request.body)
    
//     try {
//         const registerUseCase = makeRegisterUseCase()
//         await registerUseCase.execute({
//             name, email, password
//         })
//     } catch (err) {
//         if (err instanceof UserAlreadyExistsError) {
//             return reply.status(409).send({ 'message': err.message })
//         }
//         throw err
//     }

//     return reply.status(201).send()
// }