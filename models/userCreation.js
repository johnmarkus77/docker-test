import pool from '../database/database.js'

export async function createUser(username, password) {
    try {
        const [results] = await pool.execute(
            'INSERT INTO users (username, password) VALUES (?, ?)',
            [username, password]
        );
        return results;
    } catch (error) {
        throw error;
    }
}

export async function getUserByUsername(username) {
    const query = 'SELECT * FROM users WHERE username = ?';

    try {
        const [rows] = await pool.query(query, [username]);
        return rows[0]; 
    } 
    catch (error) {
        throw new Error('Error fetching user from the database');
    }
}
