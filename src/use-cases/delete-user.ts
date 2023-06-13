import { User } from "../@types/user"
import { UsersRepository } from "../http/repositories/users-repository"
import { ResourceNotFoundError } from "./errors/resource-not-found-error"

interface DeleteUserUseCaseRequest {
    id: string
}

interface DeleteUserUseCaseResponse {
    user: User
}

export class DeleteUserUseCase {
    constructor (private usersRepository: UsersRepository){}

    async execute({ 
        id

     }: DeleteUserUseCaseRequest): Promise<DeleteUserUseCaseResponse> {

        const user = await this.usersRepository.findById(id)

        if (!user) {
            throw new ResourceNotFoundError()
        }

        await this.usersRepository.delete(user)

        return {
            user
        }
    }
}