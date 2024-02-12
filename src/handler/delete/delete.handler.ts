import {sendNotFound, sendRes, UUIDV4_REGEXP} from "../../services/base-http/base-http.service";
import {IncomingMessage, ServerResponse} from "http";
import {StatusCode} from "../../models/server.model";
import {deleteUser} from "../../mem/mem";
import {CatchMemErrors} from "../../services/catch-mem-errors/catch-mem-errors";

export const handleDeleteRequest = (req: IncomingMessage, res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
}) => {
    const urlParts: string[] | undefined = req.url?.split('/').filter(part => part);
    const endpoint: string | null = urlParts && urlParts.length > 1 ? urlParts[1] : null;

    switch (endpoint) {
        case 'users': {
            if (urlParts?.length === 3) {
                const param: string | null = urlParts && urlParts.length >= 2 ? urlParts[2] : null;

                if (!param || !UUIDV4_REGEXP.test(param)) {
                    return sendRes(StatusCode.BadRequest, res, {message: 'Bad id string'});
                }

                try {
                    const result: boolean = deleteUser(param);

                    if (result) {
                        return sendRes(StatusCode.NoContent, res);
                    } else {
                        return sendRes(StatusCode.ServerError, res);
                    }
                } catch (e: any) {
                    return CatchMemErrors(e?.name, res, e?.message);
                }
            } else {
                return sendNotFound(res);
            }
        }
        default:
            sendNotFound(res);
    }
}
