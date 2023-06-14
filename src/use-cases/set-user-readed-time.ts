import { User } from "@prisma/client"
import { UsersRepository } from "../http/repositories/users-repository"
import { Decimal } from "@prisma/client/runtime/library"

interface SetUserReadedTimeUseCaseRequest extends User {}

interface SetUserReadedTimeUseCaseResponse {
    user: User
}

export class SetUserReadedTimeUseCase {
    constructor (private usersRepository: UsersRepository){}

    async execute(user: SetUserReadedTimeUseCaseRequest): Promise<SetUserReadedTimeUseCaseResponse> {
        const readedTime = new Decimal(Number(user.readed_time) + 1)
        await this.usersRepository.update({
            ...user,
            readed_time: readedTime
        })
        
        return {
            user
        }
    }
}