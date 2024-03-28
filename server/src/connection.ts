import { Pool } from "pg";

const connection = new Pool({
    host: "127.0.0.1",
    port: 5432,
    database: "d_clone",
    user: "d_clone_system",
    password: process.env.password
});

export default connection;