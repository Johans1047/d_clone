import { Router, Request, Response } from "express";
import UserModel from "../models/UserModel.ts";
import { QueryResult } from "pg";

const router: Router = Router(); 
const userModel = new UserModel();

router.get("/login", async (req: Request, res: Response) => {
    try{
        const user = await userModel.getUser(1) as QueryResult;
        const rows = user.rows as Object[];
        
        res.status(200).json(rows);
    } catch(error){
        console.error("Te la cagaste", error);
    }


});

router.get("signup", () => {
    // Controlador signup
});

// Middleware de manejo de errores
router.use((err: Error, req: Request, res: Response) => {
    console.error(err.stack);
    res.status(500).send("Hubo un error en el servidor.");
});

export default router;

// async getUser(id: number) {
//     const query = "SELECT * FROM USERS WHERE ID = ?";
//     const values = [id];

//     return new Promise((resolve, reject) => {
//         connection.query(query, values,(error: Error, result: any) => {
//             if(error){
//                 reject(new Error(`Error ejecutando el query ${query}!\n=========================\n${error.message}`));
//             }
//             resolve(result);
//         });
//     });
// }