import { Router, Request, Response } from "express";
import UserModel from "../models/UserModel.ts";
import { QueryResult } from "pg";

const router: Router = Router(); 
const userModel = new UserModel();

function toReadableDateTime(pg_date: string, datetime?: boolean): string{
    const date = new Date(pg_date);
    const months = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    };

    const year: number = date.getFullYear();
    const month: string = months[date.getMonth() + 1];
    const day: number = date.getDate();
    let time = "";
    if(datetime){
        time = ` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
    return `${month} ${day}, ${year}${time}` as string;
}

function toNewsletterOption(newsletter: boolean): string{
    return newsletter? "OPT IN": "OPT OUT" as string;
 
}

function toOnlineStatus(status: number){
    const onlineStatus = {
        0: "OFFLINE",
        1: "ONLINE",
        2: "IDLE",
        3: "DO NOT DISTURB",
        4: "INVISIBLE",
    }

    return onlineStatus[status];
    
}

function toAccountStatus(status: number){
    const accountStatus = {
        0: "INACTIVE",
        1: "ACTIVE",
        2: "DELETED",
    }

    return accountStatus[status];
    
}



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
        let rows = result.rows
        for(let row of rows){
            console.log(row["username"]);
            row["birthdate"] = toReadableDateTime(row["birthdate"]);
            row["creation_date"] = toReadableDateTime(row["creation_date"], true);
            row["newsletter"] = toNewsletterOption(row["newsletter"]);
            row["online_status"] = toOnlineStatus(row["online_status"]);
            row["account_status"] = toAccountStatus(row["account_status"]);
        }
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