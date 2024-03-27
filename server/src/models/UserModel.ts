import { QueryResult } from "pg";
import connection from "../connection";

import IUser from "../interfaces/IUser";
import IModel from "../interfaces/IModel";

class UserModel implements IModel{
    data(result: QueryResult<any>): IUser[] {
        const data = result.rows;
        
        console.log(JSON.stringify(data));

        const user: IUser = {
            id: 0,
            fullName: "",
            userName: "",
            email: "",
            password: "",
            newsletter: false
        }

        return [user];
        // throw new Error("Method not implemented.");
    }

    insert(row: IUser): QueryResult<any> {
        throw new Error("Method not implemented.");
    }

    async select(limit?: number | undefined, offset?: number | undefined): Promise<QueryResult<any>> {
        let query: string = "SELECT * FROM USERS";
        let i: number = 0;
        let data: number[] = [];

        if(limit !== undefined) {
            query += " LIMIT $" + (++i);
            data.push(limit);
        }

        if(offset !== undefined) {
            query += " OFFSET $" + (++i);
            data.push(offset);
        }

        const result: Promise<QueryResult<any>> = connection.query(query, data);
        return result;
    }

    get(id: number): QueryResult<any> {
        throw new Error("Method not implemented.");
    }

    update(values: IUser): QueryResult<any> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): QueryResult<any> {
        throw new Error("Method not implemented.");
    }
}

export default UserModel;