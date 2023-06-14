import { PrismaUsersRepository } from "@/http/repositories/prisma/prisma-users-repository"
import { CountUserReadedTimesUseCase } from "../count-user-readed-times"

export function makeCountUserReadedTimesUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new CountUserReadedTimesUseCase(usersRepository)

    return useCase
}