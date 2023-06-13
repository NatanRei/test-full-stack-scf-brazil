import { User, UserCreateInput } from "../@types/user"
import { UsersRepository } from "../http/repositories/users-repository"

interface CreateUserUseCaseRequest extends UserCreateInput {}

interface CreateUserUseCaseResponse {
    user: User
}

export class CreateUserUseCase {
    constructor (private usersRepository: UsersRepository){}

    async execute({ 
        name,
        job

     }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
        const user = await this.usersRepository.create({
            name,
            job
        })

        return {
            user
        }
    }
}