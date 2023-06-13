import { ResourceNotFoundError } from './errors/resource-not-found-error';
import { User, UserCreateInput } from "../@types/user"
import { UsersRepository } from "../http/repositories/users-repository"

interface GetUserUseCaseRequest {
    id: string
}

interface GetUserUseCaseResponse {
    user: User | null
}

export class GetUserUseCase {
    constructor (private usersRepository: UsersRepository){}

    async execute({ 
        id
     }: GetUserUseCaseRequest): Promise<GetUserUseCaseResponse> {
        const user = await this.usersRepository.findById(id)

        if (!user) {
            throw new ResourceNotFoundError();
        }

        return {
            user
        }
    }
}