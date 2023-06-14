
import { makeGetUsersUseCase } from '@/use-cases/factories/make-get-users-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

interface User {
    id: string;
    name: string;
    job: string;
    role: string;
    password_hash?: string;
    created_at: Date
}

export async function get( _: FastifyRequest, reply: FastifyReply ) {
    
    const getUsersUseCase = makeGetUsersUseCase()
    const { users } = await getUsersUseCase.execute()

    const users_without_password_hash: User[] = users
    users_without_password_hash.forEach(user => {
        delete user.password_hash
    });

    return reply.status(200).send(users_without_password_hash)
}