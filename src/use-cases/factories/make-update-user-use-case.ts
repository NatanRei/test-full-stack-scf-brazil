import { PrismaUsersRepository } from "@/http/repositories/prisma/prisma-users-repository"
import { UpdateUserUseCase } from "../update-user"

export function makeUpdateUserUseCase() {
    const usersRepository = new PrismaUsersRepository()
        const useCase = new UpdateUserUseCase(usersRepository)

    return useCase
}