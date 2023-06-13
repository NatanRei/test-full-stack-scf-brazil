import { User } from "../@types/user"
import { UsersRepository } from "../http/repositories/users-repository"

interface DeleteUserUseCaseRequest {
    user: User
}

interface DeleteUserUseCaseResponse {
    user: User
}

export class DeleteUserUseCase {
    constructor (private usersRepository: UsersRepository){}

    async execute({ 
        user

     }: DeleteUserUseCaseRequest): Promise<DeleteUserUseCaseResponse> {
        await this.usersRepository.delete(user)

        return {
            user
        }
    }
}