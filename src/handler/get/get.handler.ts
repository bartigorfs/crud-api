import {IncomingMessage, ServerResponse} from "http";
import {sendNotFound} from "../../services/base-http/base-http.service";

export const handleGetRequest = (req: IncomingMessage, res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
}) => {
    switch (req.url) {
        default:
            sendNotFound(res);
    }
}
