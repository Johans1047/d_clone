/** Imported Modules */
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import UserController from "./controllers/UserController.ts";


/** Declarations */
dotenv.config();
const app: Express = express();
const HOST = process.env.EXPRESS_HOST;
const PORT = process.env.EXPRESS_PORT;


/** Routes */
app.get("/", (req: Request, res: Response) => {
    res.send("<h1>RubielGOD</h1>\n<hr>");
});


app.use("/users", UserController);

/** Express Listener */
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!\nClick here: http://${HOST}:${PORT}`)
});