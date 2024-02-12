import {IncomingMessage, ServerResponse} from "http";
import {sendNotFound, sendRes} from "../../services/base-http/base-http.service";
import {StatusCode} from "../../models/server.model";
import {getAllUsers, getUserById} from "../../mem/mem";
import {CatchMemErrors} from "../../services/catch-mem-errors/catch-mem-errors";
import {User} from "../../models/user.model";

export const handleGetRequest = (req: IncomingMessage, res: ServerResponse): void => {

    const urlParts = req.url?.split('/').filter(part => part);
    const endpoint: string | null = urlParts && urlParts.length > 1 ? urlParts[1] : null;

    const getAllUsersFromMem = () => {
        let result: User[] | null = null;

        try {
            result = getAllUsers();
        } catch (e: any) {
            return CatchMemErrors(e?.name, res, e?.message);
        }

        sendRes(StatusCode.OK, res, result);
    }

    const getUserFromMem = (userId: string) => {
        let user: User | null = null;

        try {
            user = getUserById(userId);

            if (!user) {
                return sendRes(StatusCode.NotFound, res);
            }

            return sendRes(StatusCode.OK, res, {user});
        } catch (e: any) {
            return CatchMemErrors(e?.name, res, e?.message);
        }
    }

    switch (endpoint) {
        case 'users': {
            if (urlParts?.length === 2) {
                getAllUsersFromMem();
            } else if (urlParts?.length === 3) {
                const param: string | null = urlParts && urlParts.length >= 2 ? urlParts[2] : null;
                getUserFromMem(param as string);
            }
            break;
        }
        default:
            return sendNotFound(res);
    }
}
