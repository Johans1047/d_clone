import { QueryResult } from "pg";
import IDataOperable from "./IDataOperable";

interface IModel {
    data(result: QueryResult<any>): IDataOperable | IDataOperable[];
    insert(row: IDataOperable): Promise<QueryResult<any>>;
    select(limit?: number | undefined, offset?: number | undefined): Promise<QueryResult<any>>;
    get(id: number): Promise<QueryResult<any>>;
    update(values: IDataOperable): Promise<QueryResult<any>>;
    delete(id: number): Promise<QueryResult<any>>;
}

export default IModel;