import {ContentTypes} from "../../models/server.model";
import {IncomingMessage, ServerResponse} from "http";

export const sendNotFound = (res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
}) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', ContentTypes.JSON)
    res.write(
        JSON.stringify({message: 'Not found'})
    )
    res.end();
}
