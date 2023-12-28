import { connection } from "../../connection";
class UserModel {

    /**
     * Retrieves a list of users from the USERS table, with optional limits and offsets for efficient queries.
     *
     * @async 
     * @param {number} limit the limit of rows to be returned by the query
     * @param {number} offset the offset value from which the query will start returning results
     * @returns {Promise<Object>} A promise that resolves to an object representing the result of the query.
     * @throws {Error} If the connection to the database failed in any step.
     */

    async getAllUsers(limit: number, offset: number) {
        let query = `SELECT * FROM USERS`;
        let values: number[] = [];

        if (limit) {
            query += `LIMIT ?`;
            values.push(limit);
        }
        if (offset) {
            query += `OFFSET ?`;
            values.push(offset);
        }

        return new Promise((resolve, reject) => {
            connection.query(query, values, (error: Error, result: any) => {
                if (error) {
                    reject(new Error(`Error ejecutando el query ${query}!\n=========================\n${error.message}`));
                }
                resolve(result);
            });
        });

    }

    /**
     * Retrieves a single row from the USERS table using it's Primary Key attribute.
     * 
     * @async
     * @param {number} id the ID of the user being requested
     * @returns {Promise<Object>} A promise that resolves to an object representing the result of the query.
     * @throws {Error} If there is an error while querying the database.
     */

    async getUser(id: number) {
        const query = "SELECT * FROM USERS WHERE ID = ?";
        const values = [id];

        return new Promise((resolve, reject) => {
            connection.query(query, values,(error: Error, result: any) => {
                if(error){
                    reject(new Error(`Error ejecutando el query ${query}!\n=========================\n${error.message}`));
                }
                resolve(result);
            });
        });
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
     * @returns {Promise<Object>} A promise that resolves to an object representing the result of the query.
     * @throws {Error} If the query to the database failed in any step.
     */

    async createUser(firstName: string, lastName: string, userName: string, email: string, password: string, birthDate: Date, newsletter: boolean) {
        const query = "INSERT INTO USERS (FIRST_NAME, LAST_NAME, USER_NAME, EMAIL, PASSWORD, BIRTHDATE, NEWSLETTER) VALUES (?, ?, ?, ?, ?, ?, ?)";
        const values = [firstName, lastName, userName, email, password, birthDate, newsletter];

        return new Promise((resolve, reject) => {
            connection.query(query, values, (error: Error, result: any) => {
                if (error) {
                    reject(new Error(`Error ejecutando el query ${query}!\n=========================\n${error.message}`));
                }
                resolve(result);
            });
        });
    }

    /**
     * Updates a row in the user table with the online status passed through parameters.
     * 
     * @async
     * @param {number} id the ID of the user being requested.
     * @param {number} status the status selected by the user on default.
     * @returns {Promise<Object>} A promise that resolves to an object representing the result of the query.
     * @throws {Error} If the database connection fails in any step.
     */

    async setOnlineStatus(id: number, status: number){
        const query = "UPDATE USERS SET ONLINE_STATUS = ? WHERE ID = ?";
        const values = [id, status];

        return new Promise((resolve, reject) => {
            connection.query(query, values, (error: Error, result: any) => {
                if (error) {
                    reject(new Error(`Error ejecutando el query ${query}!\n=========================\n${error.message}`));
                }
                resolve(result);
            });
        });
    }

    /**
     * Updates a row in the user table with the account status passed through parameters.
     * 
     * @async
     * @param {number} id the ID of the user being requested.
     * @param {number} status the status selected by the user.
     * @returns {Promise<Object>} A promise that resolves to an object representing the result of the query.
     * @throws {Error} If there was an error while querying the database.
     */

    async setAccountStatus(id: number, status: number): Promise<Object>{
        const query = "UPDATE USERS SET ACCOUNT_STATUS = ? WHERE ID = ?";
        const values = [id, status];

        return new Promise((resolve, reject) => {
            connection.query(query, values, (error: Error, result: any) => {
                if (error) {
                    reject(new Error(`Error ejecutando el query ${query}!\n=========================\n${error.message}`));
                }
                resolve(result);
            });
        });
    }
}

export default UserModel;