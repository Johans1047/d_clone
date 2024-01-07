import { QueryResult } from "pg";

interface Model{
    getColumnNames(): Promise<QueryResult<any>>,
    countRows(): Promise<QueryResult<any>>,
    getAll(limit: number, offset: number): Promise<QueryResult<any>>,
    get(pk: number): Promise<QueryResult<any>>,
    create(...args: any[]):  Promise<QueryResult<any>>,
    // update(pk: number, ...args: any[]):  Promise<QueryResult<any>>,
    delete(pk: number):  Promise<QueryResult<any>>,
}

export default Model;