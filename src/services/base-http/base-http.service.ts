import {ContentTypes, SetHeaderOptions, StatusCode} from "../../models/server.model";
import {IncomingMessage, ServerResponse} from "http";

export const sendNotFound = (res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
}): void => {
    res.statusCode = StatusCode.NotFound;
    res.setHeader('Content-Type', ContentTypes.JSON)
    res.write(
        JSON.stringify({message: 'Not found'})
    )
    res.end();
}

export const sendRes = (statusCode: number | StatusCode, res: ServerResponse, data?: any, contentType?: SetHeaderOptions): void => {
    res.statusCode = statusCode;

    if (contentType) {
        res.setHeader(contentType.name, contentType.type);
    } else {
        res.setHeader('Content-Type', ContentTypes.JSON)
    }

    if (data) {
        res.write(
            JSON.stringify(data)
        )
    }

    res.end();
}


// export const validateParam = (param: string | number | string[] | number[]) => {
//     if (Array.isArray(param)) {
//
//     } else if (param && param != '') {
//
//     } else {
//
//     }
// }
