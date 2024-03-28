import { QueryResult } from "pg";
import connection from "../connection";

import IUser from "../interfaces/IUser";
import UserStatus from "../enums/UserStatus";
import IModel from "../interfaces/IModel";
import ISQLMappable from "../interfaces/ISQLMappable";
import { Case, caseConvert }  from "../conversion";

class UserModel implements IModel{

    data(result: QueryResult<any>): IUser[] {
        const data = result.rows;
        
        console.log(JSON.stringify(data));

        /* BEGIN REMOVE */
        const user: IUser = {
            id: 0,
            fullName: "",
            userName: "",
            email: "",
            password: "",
            newsletter: false,
            creationDate: new Date(),
            status: UserStatus.UNVERIFIED,
        }

        return [user];
        /* END REMOVE */
    }

    unpack(user: IUser): ISQLMappable {
        const map: ISQLMappable = { values: [] };

        for(let key in user) {
            if(user[key] != undefined) {
                map.values.push({colName: caseConvert(key, Case.CAMEL, Case.UPPER), value: user[key]});
            }
        }
        return map;
    }

    insert(row: IUser): Promise<QueryResult<any>> {
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

    get(id: number): Promise<QueryResult<any>> {
        const query: string = "SELECT * FROM USERS WHERE ID = $1";
        const data = [id];
        
        const result: Promise<QueryResult<any>> = connection.query(query, data);
        return result;
    }

    update(values: IUser): Promise<QueryResult<any>> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Promise<QueryResult<any>> {
        const query: string = "DELETE FROM USERS WHERE ID = $1";
        const data = [id];

        const result: Promise<QueryResult<any>> = connection.query(query, data);
        return result;
    }
}

export default UserModel;