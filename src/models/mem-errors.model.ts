import {StatusCode} from "./server.model";

export class MemNotFound extends Error {
    constructor() {
        super('User or users not found!');
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


export enum MemErrorStatusCode {
    'MemNotFound' = StatusCode.NotFound,
    'MemInvalidArgs' = StatusCode.BadRequest,
    'MemAlreadyCreated' = StatusCode.NotFound,
}
