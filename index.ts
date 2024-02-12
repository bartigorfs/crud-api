import {createServer, IncomingMessage} from "node:http";

import {handleGetRequest} from "./src/handler/get/get.handler";
import {HTTPMethods} from "./src/models/server.model";
import {handlePutRequest} from "./src/handler/put/put.handler";
import {handleDeleteRequest} from "./src/handler/delete/delete.handler";
import {handlePostRequest} from "./src/handler/post/post.handler";
import {sendNotFound} from "./src/services/base-http/base-http.service";
import {ServerResponse} from "http";
import {config} from "dotenv";

config();

const PORT = process.env.PORT;

const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
    switch (req.method) {
        case HTTPMethods.GET: {
            return handleGetRequest(req, res);
        }
        case HTTPMethods.PUT: {
            return handlePutRequest(req, res);
        }
        case HTTPMethods.DELETE: {
            return handleDeleteRequest(req, res);
        }
        case HTTPMethods.POST: {
            return await handlePostRequest(req, res);
        }
        default: {
            return sendNotFound(res);
        }
    }
});


server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
