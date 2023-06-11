import { FastifyRequest, FastifyReply } from 'fastify'

export async function getUsers( _: FastifyRequest, reply: FastifyReply ) {
    return reply.status(201).send()
}
