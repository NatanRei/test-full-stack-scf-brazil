
import { Prisma, Role, User } from "@prisma/client";
import { UsersRepository } from "../users-repository";
import { randomUUID } from "node:crypto";
import { Decimal } from "@prisma/client/runtime/library";

export class InMemoryUsersRepository implements UsersRepository {
    public items: User[] = []

    async getAll() {
        return this.items;
    }

    async findById(id: string) {
        const user = this.items.find(item => item.id === id);

        if(!user) {
            return null
        }
        return user
    }

    async create({ name, job, password_hash }: Prisma.UserCreateInput) {
        const user = {
            id: randomUUID().toString(),
            name,
            job,
            password_hash,
            readed_time: new Decimal(0),
            role: Role.COMMON,
            created_at: new Date(),
        }

        this.items.push(user);

        return user
    }

    async update(user: User) {
        const userIndex = this.items.findIndex(item => item.id === user.id)

        if (userIndex >= 0) {
            this.items[userIndex] = user
        }

        return user
    }

    async delete(user: User) {
        const userIndex = this.items.findIndex(item => item.id === user.id)

        if (userIndex >= 0) {
            delete this.items[userIndex]
            return true
        }
        return false
    }
}