import { PrismaUsersRepository } from "@/http/repositories/prisma/prisma-users-repository"
import { DeleteUserUseCase } from "../delete-user"

export function makeDeleteUserUseCase() {
    const usersRepository = new PrismaUsersRepository()
        const useCase = new DeleteUserUseCase(usersRepository)

    return useCase
}