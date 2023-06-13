import { User, UserCreateInput } from "../../@types/user"

export interface UsersRepository {
    findById(id: string): Promise<User | null>
    getAll(): Promise<User[]>
    create(user: UserCreateInput): Promise<User>
    update(user: User): Promise<User>
    delete(user: User): Promise<User>

}