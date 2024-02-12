export interface BaseUser {
    username: string;
    age: number;
    hobbies: (string | undefined)[];
}

export interface User extends BaseUser {
    id: string;
}

export interface Users {
    users: User[];
}

export interface UserByIdResponse {
    user: User
}