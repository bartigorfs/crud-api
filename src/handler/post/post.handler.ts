import {sendNotFound} from "../../services/base-http/base-http.service";
import {IncomingMessage, ServerResponse} from "http";

export const handlePostRequest = (req: IncomingMessage, res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
}): void => {
    switch (req.url) {
        default:
            sendNotFound(res);
    }
}
