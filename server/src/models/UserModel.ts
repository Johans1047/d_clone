import { QueryResult } from "pg";
import Model from "./Model.ts";
import connection from "../../connection.ts";
import { isBreakStatement } from "typescript";
class UserModel implements Model{

    /** Retrieves the column names of the USERS table.
     * 
     * @async
     * @returns { Promise<QueryResult<any>> } A promise that resolves to an object representing the result of the query.
     */

    async getColumnNames(): Promise<QueryResult<any>> {
        const query: string = "SELECT column_name FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'users'";
        const result:QueryResult<any> = await connection.query(query);
        return result;
    }

    async countRows(): Promise<QueryResult<any>> {
        const query: string = `SELECT COUNT(*) AS ROWS FROM USERS`;

        const  result:QueryResult<any> = await connection.query(query);
        return result;

    }

    /**
     * Retrieves a list of users from the USERS table, with optional limits and offsets for efficient queries.
     *
     * @async 
     * @param {number} limit the limit of rows to be returned by the query
     * @param {number} offset the offset value from which the query will start returning results
     * @returns {Promise<QueryResult<any>>} A promise that resolves to an object representing the result of the query.
     * @throws {Error} If the connection to the database failed in any step.
     */

    async getAll(limit: number, offset: number): Promise<QueryResult<any>> {
        let query = `SELECT * FROM USERS ORDER BY ID`;
        let values: number[] = [];
        let i = 1;
        if (limit) {
            query += ` LIMIT $${i}`;
            values.push(limit);
            i++;
        }
        if (offset) {
            query += ` OFFSET $${i}`;
            values.push(offset);
            i++;
        }
        const  result:QueryResult<any> = await connection.query(query, values);
        return result;


    }

    /**
     * Retrieves a single row from the USERS table using its Primary Key attribute.
     * 
     * @async
     * @param {number} id the ID of the user being requested
     * @returns {Promise<QueryResult<any>>} A promise that resolves to an object representing the result of the query.
     * @throws {Error} If there is an error while querying the database.
     */

    async get(id: number): Promise<QueryResult<any>> {
        const query: string = "SELECT * FROM USERS WHERE ID = $1";
        const values: any[] = [id];

        const  result: QueryResult<any> = await connection.query(query, values);

        console.log(result);
        return result;

    }

    /**
     * Creates a row in the USERS table with the information passed through parameters
     * 
     * @async
     * @param {string} firstName The user's first name.
     * @param {string} lastName The user's last name.
     * @param {string} userName The username created by the user.
     * @param {string} email The user's email
     * @param {string} password The password created by the user
     * @param {Date} birthDate The date the user was born
     * @param {boolean} newsletter Whether the user chooses to opt in or out of the newsletter
     * @returns {Promise<QueryResult<any>>} A promise that resolves to an object representing the result of the query.
     * @throws {Error} If the query to the database failed in any step.
     */

    async create(firstName: string, lastName: string, userName: string, email: string, password: string, birthDate: Date, newsletter: boolean): Promise<QueryResult<any>> {
        const query: string = "INSERT INTO USERS (FIRST_NAME, LAST_NAME, USER_NAME, EMAIL, PASSWORD, BIRTHDATE, NEWSLETTER) VALUES ($1, $2, $3, $4, $5, $6, $7)";
        const values: any[] = [firstName, lastName, userName, email, password, birthDate, newsletter];

        const result: QueryResult<any> = await connection.query(query, values);
        return result;

    }

    async delete(id: number){
        const query: string = `DELETE FROM USERS WHERE ID = $1`;
        const values: number[] = [id];

        const result: QueryResult<any> = await connection.query(query, values);
        return result;

    }

    /**
     * Updates a row in the USERS table with the online status passed through parameters.
     * 
     * @async
     * @param {number} id the ID of the user being requested.
     * @param {number} status the status selected by the user on default.
     * @returns {Promise<QueryResult<any>>} A promise that resolves to an object representing the result of the query.
     * @throws {Error} If the database connection fails in any step.
     */

    async setOnlineStatus(id: number, status: number): Promise<QueryResult<any>> {
        const query: string = "UPDATE USERS SET ONLINE_STATUS = $1 WHERE ID = $2";
        const values: any[] = [id, status];

        const  result:QueryResult<any> = await connection.query(query, values);
        return result;

    }

    /**
     * Updates a row in the user table with the account status passed through parameters.
     * 
     * @async
     * @param {number} id the ID of the user being requested.
     * @param {number} status the status selected by the user.
     * @returns {Promise<QueryResult<any>>} A promise that resolves to an object representing the result of the query.
     * @throws {Error} If there was an error while querying the database.
     */

    async setAccountStatus(id: number, status: number): Promise<QueryResult<any>> {
        const query: string = "UPDATE USERS SET ACCOUNT_STATUS = $1 WHERE ID = $2";
        const values: any[] = [id, status];

        const  result:QueryResult<any> = await connection.query(query, values);
        return result;

    }

}

export default UserModel;