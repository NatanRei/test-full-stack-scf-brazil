import { Prisma, User } from "@prisma/client"

export interface UsersRepository {
    findById(id: string): Promise<User | null>
    getAll(): Promise<User[]>
    create(user: Prisma.UserCreateInput): Promise<User>
    update(user: User): Promise<User>
    delete(user: User): Promise<Boolean>

}