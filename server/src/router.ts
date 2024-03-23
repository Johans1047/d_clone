import express, { Request, Response } from "express";
import MessageController from "./controllers/MessageController";

const HOST = "127.0.0.1";
const PORT = 5500;

const app = express();

const message = new MessageController();

app.get("/", function(req: Request, res: Response){
    res.send("<h1>RubielGOD</h1><hr>");
});

app.get("/messages/all", function(req: Request, res: Response) {
    res.send(message.getAllMessages());
})

app.listen(PORT, function(){
    console.log(`Server listening at http://${HOST}:${PORT}`);
})

