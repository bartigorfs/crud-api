import {createServer, IncomingMessage} from "node:http";

import {handleGetRequest} from "./src/handler/get/get.handler";
import {HTTPMethods} from "./src/models/server.model";
import {handlePutRequest} from "./src/handler/put/put.handler";
import {handleDeleteRequest} from "./src/handler/delete/delete.handler";
import {handlePostRequest} from "./src/handler/post/post.handler";
import {sendNotFound} from "./src/services/base-http/base-http.service";
import {ServerResponse} from "http";

const PORT = process.env.PORT || 4000;

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    switch (req.method) {
        case HTTPMethods.GET: {
            handleGetRequest(req, res);
            break;
        }
        case HTTPMethods.PUT: {
            handlePutRequest(req, res);
            break;
        }
        case HTTPMethods.DELETE: {
            handleDeleteRequest(req, res);
            break;
        }
        case HTTPMethods.POST: {
            handlePostRequest(req, res);
            break;
        }
        default: {
            sendNotFound(res);
            break;
        }
    }
});


server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
