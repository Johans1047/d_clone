import pg from 'pg'
import dotenv from "dotenv";
dotenv.config();

const db_host: string = process.env.DB_HOST;
const db_port: number = Number(process.env.DB_PORT);
const db_database: string = process.env.DB_DATABASE;
const db_user: string = process.env.DB_USER;
const db_password: string = process.env.DB_PASSWORD;

const connection = new pg.Pool({
    host: db_host,
    port: db_port,
    database: db_database,
    user: db_user,
    password: db_password
});

export default connection;