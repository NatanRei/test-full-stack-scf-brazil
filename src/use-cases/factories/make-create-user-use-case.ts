import { PrismaUsersRepository } from "@/http/repositories/prisma/prisma-users-repository"
import { CreateUserUseCase } from "../create-user"

export function makeCreateUserUseCase() {
    const usersRepository = new PrismaUsersRepository()
        const useCase = new CreateUserUseCase(usersRepository)

    return useCase
}