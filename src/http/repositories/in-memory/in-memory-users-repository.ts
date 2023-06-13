import { User, UserCreateInput } from "../../../@types/user";
import { UsersRepository } from "../users-repository";
import { randomUUID } from "node:crypto";

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

    async create(data: UserCreateInput) {
        const user = {
            id: randomUUID().toString(),
            name: data.name,
            job: data.job,
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
        }

        return user
    }
}