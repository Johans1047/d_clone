import { QueryResult } from "pg";

interface IModel {
    data(result: Promise<QueryResult<any>>): Promise<{}[]>;
    insert(...args: any[]): Promise<QueryResult<any>>;
    read(limit?: number, offset?: number): Promise<QueryResult<any>>;
    get(id: number): Promise<QueryResult<any>>;
    update(...args: any[]): Promise<QueryResult<any>>;
    delete(id: number): Promise<QueryResult<any>>;
}

export default IModel;