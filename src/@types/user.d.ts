export interface User {
    id: string,
    name: string,
    job: string,
    readTimes?: number
}

export interface UserCreateInput {
    name: string,
    job: string,
}