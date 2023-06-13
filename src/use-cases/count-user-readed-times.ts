import { ResourceNotFoundError } from './errors/resource-not-found-error';
import { UsersRepository } from "../http/repositories/users-repository"

interface CountUserReadedTimesUseCaseRequest {
    id: string
}

interface CountUserReadedTimesUseCaseResponse {
    userReadedTimes: number
}

export class CountUserReadedTimesUseCase {
    constructor (private usersRepository: UsersRepository){}

    async execute({ 
        id
     }: CountUserReadedTimesUseCaseRequest): Promise<CountUserReadedTimesUseCaseResponse> {
        const user = await this.usersRepository.findById(id)

        if (!user) {
            throw new ResourceNotFoundError();
        }

        return {
            userReadedTimes: Number(user.readTimes)
        }
    }
}