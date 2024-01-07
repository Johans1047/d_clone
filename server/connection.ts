import pg from 'pg'
import dotenv from "dotenv";
dotenv.config();

const connection = new pg.Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as unknown as number,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

export default connection;