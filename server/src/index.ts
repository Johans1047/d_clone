import express from "express";
import { Express, Request, Response } from "express";

const HOST: string = "127.0.0.1";
const PORT: number = 5500;

const app: Express = express();

// BEGIN REMOVE

import UserModel from "./models/UserModel";

const model = new UserModel();

// END REMOVE

app.get("/", function(req: Request, res: Response): void {

    model.data();

    // res.send("<h1>RubielGOD</h1><hr>");

});

app.listen(PORT, () => { 
    console.log("Server is listening at port "+ PORT +".\nClick here: http://"+HOST+":"+PORT); 
});