import { InMemoryUsersRepository } from "../../http/repositories/in-memory/in-memory-users-repository"
import { GetUsersUseCase } from "../get-users"

export function makeGetUsersUseCase() {
    const usersRepository = new InMemoryUsersRepository()
        const useCase = new GetUsersUseCase(usersRepository)

    return useCase
}