import { Router, Request, Response } from "express";
import UserModel from "../models/UserModel.ts";
import { QueryResult } from "pg";

const router: Router = Router(); 
const userModel = new UserModel();

router.get("/login", (req: Request, res: Response) => {
    res.status(200).send("<h1>RubielGOD pero en login</h1>\n<hr>");
    // TODO
});

router.get("/signup", (req: Request, res: Response) => {
    res.status(200).send("<h1>RubielGOD pero en signup</h1>\n<hr>");
    // TODO
});

router.get("/count", async (req: Request, res: Response) => {
    try{
        const result: QueryResult<any> = await userModel.countRows();
        const count = result.rows[0] as Object;
        res.status(200).json(count);
    } catch(error){
        console.error("Te la cagaste!", error);
        res.status(500).send("<h1>500 Internal Server Error</h1>\n<hr>");
    }
});

router.get("/columns", async (req: Request, res: Response) => {
    try{
        const result: QueryResult<any> = await userModel.getColumnNames();
        res.status(200).json(result.rows);
    } catch(error){
        console.error("Te la cagaste!", error);
        res.status(500).send("<h1>500 Internal Server Error</h1>\n<hr>");
    }
});

router.delete("/id/:id",  async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    try{
        const result: QueryResult<any> = await userModel.delete(id);
        res.status(200).json(result)
    } catch(error){
        console.error("Te la cagaste!", error);
        res.status(500).send("<h1>500 Internal Server Error</h1>\n<hr>");
    }
});

router.get("/all/:limit?/:offset?", async (req: Request, res: Response) => {
    const limit = (req.params.limit === undefined)? 0 : Number(req.params.limit);
    const offset = (req.params.offset === undefined)? 0 : Number(req.params.offset);
    try {
        const result = await userModel.getAll(limit, offset);
        res.status(200).json(result.rows)
    } catch (error) {
        console.error("Te la cagaste! ", error);
        res.status(500).send("<h1>500 Internal Server Error</h1>\n<hr>");
    }
});

router.get("/id/:id", async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    try{
        const result: QueryResult<any> = await userModel.get(id);
        res.status(200).json(result.rows);
    } catch(error){
        console.error("Te la cagaste!", error);
        res.status(500).send("<h1>500 Internal Server Error</h1>\n<hr>");
    }
});

export default router;