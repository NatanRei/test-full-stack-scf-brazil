import { User } from "@prisma/client"
import { UsersRepository } from "../http/repositories/users-repository"


interface GetUsersUseCaseResponse {
    users: User[]
}

export class GetUsersUseCase {
    constructor (private usersRepository: UsersRepository){}

    async execute(): Promise<GetUsersUseCaseResponse> {
        const users = await this.usersRepository.getAll()

        return {
            users
        }
    }
}