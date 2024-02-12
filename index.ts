import {createServer} from "node:http";

const PORT = process.env.PORT || 4000;

const server = createServer((req, res) => {
    switch (req.method){

    }
});


server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
