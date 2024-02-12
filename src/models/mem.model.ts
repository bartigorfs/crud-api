export interface MemModel {
    users: User[]
}

export interface User {
    id: string;
    username: string;
    age: number;
    hobbies: string[] | [];
}
