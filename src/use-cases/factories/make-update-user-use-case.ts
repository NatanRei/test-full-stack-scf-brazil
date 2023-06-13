import { InMemoryUsersRepository } from "../../http/repositories/in-memory/in-memory-users-repository"
import { UpdateUserUseCase } from "../update-user"

export function makeUpdateUserUseCase() {
    const usersRepository = new InMemoryUsersRepository()
        const useCase = new UpdateUserUseCase(usersRepository)

    return useCase
}