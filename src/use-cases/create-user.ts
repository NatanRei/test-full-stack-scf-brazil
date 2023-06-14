import { hash } from "bcryptjs"
import { UsersRepository } from "../http/repositories/users-repository"
import { Role, User } from "@prisma/client"

interface CreateUserUseCaseRequest {
    name: string,
    job: string,
    password: string,
}

interface CreateUserUseCaseResponse {
    user: User
}

export class CreateUserUseCase {
    constructor (private usersRepository: UsersRepository){}

    async execute({ 
        name,
        job,
        password

     }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {

        const password_hash = await hash(password, 6)

        const user = await this.usersRepository.create({
            name,
            job,
            password_hash,
            role: Role.COMMON
        })

        return {
            user
        }
    }
}