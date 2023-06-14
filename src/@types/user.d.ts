export interface User {
    id: string,
    name: string,
    job: string,
    readTimes?: number
    role: UserRole
}

export interface UserCreateInput {
    name: string,
    job: string,
}

enum UserRole {
    ADMIN,
    COMMON
}