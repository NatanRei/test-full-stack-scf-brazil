import { Prisma, User } from "@prisma/client";
import { UsersRepository } from "../users-repository";
import { prisma } from "@/lib/prisma";

export class PrismaUsersRepository implements UsersRepository {
    async findById(id: string) {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })
        return user
    }

    async getAll() {
        const user = await prisma.user.findMany()
        return user
    }

    async create(data: Prisma.UserCreateInput) {
        const user = await prisma.user.create({
            data
        })
        return user
    }

    async update(data: User) {
        const user = await prisma.user.update({
            where: {
                id: data.id
            },
            data
        })

        return user
    }

    async delete({ id }: User) {
        const user = await prisma.user.delete({
            where: {
                id,
            }
        })
        return !!user
    }

}