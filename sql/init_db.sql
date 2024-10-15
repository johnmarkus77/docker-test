-- create a database if it doesn't already exist
CREATE DATABASE IF NOT EXISTS test;

-- use the newly created database
USE test;

-- drop the users table if it exists (for development purposes)
DROP TABLE IF EXISTS users;

-- create the users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Insert some initial user data (So you can double check that its in ur db)
INSERT INTO users (username, password) VALUES
('user1', 'password1'),
('user2', 'password2');
