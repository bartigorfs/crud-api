import {createServer, IncomingMessage} from "node:http";
import {handleGetRequest} from "./src/handler/get/get.handler";

const PORT = process.env.PORT || 4000;

const server = createServer((req: IncomingMessage, res) => {
    switch (req.method) {
        case 'GET': {
            handleGetRequest(req, res);
            break;
        }
    }
});


server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
