import { User } from "@prisma/client"
import { UsersRepository } from "../http/repositories/users-repository"

interface UpdateUserUseCaseRequest {
    id: string,
    name: string,
    job: string
}

interface UpdateUserUseCaseResponse {
    user: User
}

export class UpdateUserUseCase {
    constructor (private usersRepository: UsersRepository){}

    async execute({ id, name, job }: UpdateUserUseCaseRequest): Promise<UpdateUserUseCaseResponse| null> {

        const user = await this.usersRepository.findById(id)

        if (!user) {
            return null
        }

        await this.usersRepository.update({
            ...user,
            name,
            job
        })
        
        return {
            user
        }
    }
}