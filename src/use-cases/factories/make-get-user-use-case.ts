import { InMemoryUsersRepository } from "../../http/repositories/in-memory/in-memory-users-repository"
import { GetUserUseCase } from "../get-user"

export function makeGetUserUseCase() {
    const usersRepository = new InMemoryUsersRepository()
        const useCase = new GetUserUseCase(usersRepository)

    return useCase
}