export interface MemModel {
    users: User[];
}

export interface User {
    id: string;
    username: string;
    age: number;
    hobbies: string[];
}

export class MemNotFound extends Error {
    constructor() {
        super('Not found item in memory object!');
        this.name = 'MemNotFound';
    }
}

export class MemInvalidArgs extends Error {
    constructor() {
        super('Invalid arguments!');
        this.name = 'MemInvalidArgs';
    }
}

export class MemAlreadyCreated extends Error {
    constructor() {
        super('User already created!');
        this.name = 'MemAlreadyCreated';
    }
}
