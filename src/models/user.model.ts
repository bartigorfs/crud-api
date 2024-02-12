export interface User {
    id: string;
    username: string;
    age: number;
    hobbies: string[];
}

export interface Users {
    users: User[];
}

export interface UserByIdResponse {
    user: User
}
