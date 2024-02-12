import {MemAlreadyCreated, MemInvalidArgs, MemNotFound} from "../models/mem-errors.model";
import {User, Users} from "../models/user.model";

let mem: Users;

const addUser = (user: User): void => {
    if (!user) throw new MemInvalidArgs();
    if (!mem || !mem.users) throw new MemNotFound();

    const searchExisting: User | undefined = mem.users.find((exist: User) => exist.id == user.id);

    if (searchExisting) {
        throw new MemAlreadyCreated();
    }

    mem.users.push(user);
}

const getAllUsers = (): User[] => {
    if (mem && mem.users) {
        return mem.users;
    } else {
        throw new MemNotFound();
    }
}

export const getUserById = (userId: string): User => {
    if (mem && mem.users) {
        const result: User | undefined = mem.users.find((user: User) => user.id === userId);

        if (!result) {
            throw new MemNotFound();
        }

        return result;
    } else {
        throw new MemNotFound();
    }
}

export {addUser, getAllUsers};
