/** Imported Modules */
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import UserController from "./controllers/UserController.ts";
import cors from "cors";

/** Declarations */
dotenv.config();
const app: Express = express();
const HOST = process.env.EXPRESS_HOST;
const PORT = process.env.EXPRESS_PORT;

/** Middleware */
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: "GET,POST,PUT,PATCH,DELETE",
    credentials: true,
}));

/** Routes */
app.get("/", (req: Request, res: Response) => {
    res.send("<h1>RubielGOD</h1>\n<hr>");
});

app.use("/users", UserController);

/** Express Listener */
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!\nClick here: http://${HOST}:${PORT}`)
});