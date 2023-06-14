import { PrismaUsersRepository } from "@/http/repositories/prisma/prisma-users-repository"
import { SetUserReadedTimeUseCase } from "../set-user-readed-time"

export function makeSetUserReadedTimeUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new SetUserReadedTimeUseCase(usersRepository)

    return useCase
}