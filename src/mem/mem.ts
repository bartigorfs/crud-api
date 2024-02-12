import {MemAlreadyCreated, MemInvalidArgs, MemModel, User} from "../models/mem.model";

let mem: MemModel;

const addUser = (user: User) => {
    if (!user) throw new MemInvalidArgs();

    const searchExisting: User | undefined = mem.users.find((exist: User) => exist.id == user.id);

    if (searchExisting) {
        throw new MemAlreadyCreated();
    }

    mem.users.push(user);
}

export {addUser};
