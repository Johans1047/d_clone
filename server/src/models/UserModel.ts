import IModel from "./IModel";
import connection from "../connection";
import { QueryResult } from "pg";

class UserModel implements IModel {
    data(result: Promise<QueryResult<any>>): Promise<{}[]> {
        const query = ""
    }
    insert(...args: any[]): Promise<QueryResult<any>> {
        throw new Error("Method not implemented.");
    }
    read(limit?: number | undefined, offset?: number | undefined): Promise<QueryResult<any>> {
        throw new Error("Method not implemented.");
    }
    get(id: number): Promise<QueryResult<any>> {
        throw new Error("Method not implemented.");
    }
    update(...args: any[]): Promise<QueryResult<any>> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<QueryResult<any>> {
        throw new Error("Method not implemented.");
    }
    
}

export default UserModel;