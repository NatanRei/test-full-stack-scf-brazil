import { User } from "../@types/user"
import { UsersRepository } from "../http/repositories/users-repository"

interface UpdateUserUseCaseRequest extends User {}

interface UpdateUserUseCaseResponse {
    user: User
}

export class UpdateUserUseCase {
    constructor (private usersRepository: UsersRepository){}

    async execute(user: UpdateUserUseCaseRequest): Promise<UpdateUserUseCaseResponse> {
        await this.usersRepository.update(user)
        
        return {
            user
        }
    }
}