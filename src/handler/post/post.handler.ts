import {sendNotFound} from "../../services/base-http/base-http.service";
import {IncomingMessage, ServerResponse} from "http";

const handlePostRequest = (req: IncomingMessage, res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
}) => {
    switch (req.url) {
        default:
            sendNotFound(res);
    }
}
