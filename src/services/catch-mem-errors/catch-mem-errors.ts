import {sendRes} from "../base-http/base-http.service";
import {StatusCode} from "../../models/server.model";
import {ServerResponse} from "http";
import {MemErrorStatusCode} from "../../models/mem-errors.model";

export const CatchMemErrors = (name: keyof typeof MemErrorStatusCode, res: ServerResponse, msg?: string) => {
    const message = {message: msg ? msg : 'Internal server error'};
    const statusCode: MemErrorStatusCode | StatusCode = MemErrorStatusCode[name] || StatusCode.ServerError;

    return sendRes(statusCode, res, message);
}
