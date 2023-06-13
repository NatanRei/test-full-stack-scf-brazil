import { InMemoryUsersRepository } from "../../http/repositories/in-memory/in-memory-users-repository"
import { DeleteUserUseCase } from "../delete-user"

export function makeDeleteUserUseCase() {
    const usersRepository = new InMemoryUsersRepository()
        const useCase = new DeleteUserUseCase(usersRepository)

    return useCase
}