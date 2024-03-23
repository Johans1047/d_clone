import IModel from "./IModel";
import connection from "../connection";
import { QueryResult } from "pg";

interface Message {
    id: number;
    senderID: number;
    message: string;
    sentDate: Date;
    receivedDate?: Date | null;
}

class MessageModel implements IModel {
    /**
     * Formats the rows of a QueryResult object into an array of TypeScript interface types.
     * @param result A promise that resolves to the result of the query executed.
     * @returns The rows of the resulting query, formatted to the appropriate Message object.
     */
    async data(result: Promise<QueryResult<any>>): Promise<{}[]>{
        const data = (await result).rows;

        return [{}]; // REMOVE
    }
    /**
     * Saves a sent message to the database
     * @param userId the ID of the user who sent the message
     * @param message the text sent in the message body
     * @param sentDate the exact timestamp at which the user pressed the "Send" button.
     * @returns a promise that resolves to the result of the query.
     */
    insert(userId: number, message: string, sentDate: Date): Promise<QueryResult<any>> {
        const query: string = "INSERT INTO MESSAGES(SENDER_ID, MESSAGE, SENT_DATE) VALUES ($1, $2, $3)";
        const data: any[] = [userId, message, this.toPgDate(sentDate)];

        const result: Promise<QueryResult<any>> = connection.query(query, data);

        return result;
    }
    
    /**
     * Retrieves all or some rows from the Messages table.
     * @param limit the limit of rows to be returned by the query.
     * @param offset the row from which the query is to start returning rows.
     * @returns a promise that resolves to the result of the query.
     */
    read(limit?: number | undefined, offset?: number | undefined): Promise<QueryResult<any>> {
        let i=0;
        const queryLimit: string = limit ? ` LIMIT $${++i}` : "";
        const queryOffset: string = offset ? ` OFFSET $${++i}` : "";
        let data: any[] = [];

        if(limit) data.push(limit);
        if(offset) data.push(offset);

        const query: string = "SELECT * FROM MESSAGES" + queryLimit + queryOffset;
        
        const result: Promise<QueryResult<any>> = connection.query(query, data);

        return result;
    }

    /**
     * Retrieves a single row from the Messages table.
     * @param id the ID of the element to be returned.
     * @returns a promise that resolves to the row whose primary key matches the ID passed as an argument to the method.
     */
    get(id: number): Promise<QueryResult<any>> {
        const query: string = "SELECT MESSAGE FROM MESSAGES WHERE ID = $1";
        const data: any[] = [id];

        const result: Promise<QueryResult<any>> = connection.query(query, data);

        return result;
    }

    /**
     * Updates a row from the messages table.
     * @param id the ID of the element to be updated.
     * @param message the text sent in the message body
     * @returns a promise that resolves to the updated message that matches the ID passed. 
     */
    update(id: number, message: string): Promise<QueryResult<any>> {
        const query: string = "UPDATE MESSAGES SET MESSAGE = $1 WHERE ID = $2 RETURNING *";
        const data: any[] = [message, id];

        const result: Promise<QueryResult<any>> = connection.query(query, data);

        return result;
    }
    
    /**
     * Updates a row from the messages table.
     * @param id the ID of the element to be deleted.
     * @returns a promise that resolves to the deleted message that matches the ID passed. 
     */
    delete(id: number): Promise<QueryResult<any>> {
        const query: string = "DELETE FROM MESSAGES WHERE ID = $1";
        const data: any[] = [id];

        const result: Promise<QueryResult<any>> = connection.query(query, data);
        return result;
    }

    /**
     * Transforms a date object written in JavaScript's standard date format to a PostgreSQL date.
     * @param date the date object sent to the model from outside.
     * @returns the same date, formatted as a string in the preferred PostgreSQL date format.
     */
    toPgDate(date: Date): string {
        const yyyy = date.getFullYear();
        const mm = date.getMonth();
        const dd = date.getDate();
        const h = date.getHours();
        const min = date.getMinutes();
        const s = date.getSeconds();
        const ms = date.getMilliseconds();

        return `${yyyy}-${mm}-${dd}  ${h}:${min}:${s}.${ms}0`;
    }

    
}

export default MessageModel;