/*
    Example of how the backend server can connect to the database instance.

    Still need to do more research, but I believe we can plug in our AWS database instance
    details in a similar fashion to have our node server access it. We just need to use
    environment variables instead.
*/
import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'test',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();

export default pool;
