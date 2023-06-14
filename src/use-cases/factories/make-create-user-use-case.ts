import { InMemoryUsersRepository } from "../../http/repositories/in-memory/in-memory-users-repository"
import { CreateUserUseCase } from "../create-user"

export function makeCreateUserUseCase() {
    const usersRepository = new InMemoryUsersRepository()
        const useCase = new CreateUserUseCase(usersRepository)

    return useCase
}