import { InMemoryUsersRepository } from "../../http/repositories/in-memory/in-memory-users-repository"
import { CountUserReadedTimesUseCase } from "../count-user-readed-times"

export function makeCountUserReadedTimesUseCase() {
    const usersRepository = new InMemoryUsersRepository()
    const useCase = new CountUserReadedTimesUseCase(usersRepository)

    return useCase
}