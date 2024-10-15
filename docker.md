Docker steps:

    Installing Docker

    MacOS: https://docs.docker.com/desktop/install/mac-install/

    Windows(or WSL 2): https://docs.docker.com/desktop/install/windows-install/


0. Run the Docker desktop app aka the "Docker dameon"

1. Run the following command inside the root directory:
    
    docker-compose up -d

    You should see something like:
    > docker-compose up -d
    [+] Running 2/2
     ✔ Network test_backend  Created                                                                         
     ✔ Container mysql_db    Started                                                                         


2. You can check if the container is running using:
    
    docker-compose ps

    You should see something like:
    > docker-compose ps
    NAME       IMAGE       COMMAND                  SERVICE   CREATED              STATUS              PORTS
    mysql_db   mysql:8.0   "docker-entrypoint.s…"   db        About a minute ago   Up About a minute   0.0.0.0:3306->3306/tcp, 33060/tcp

3. To stop the container and kill the db:

    docker-compose down

4. Additional Docker Commands (Useful for Troubleshooting)
    To view logs for the MySQL container:
        docker-compose logs db

    To  connect to the SQL instance inside the container and use the CLI:
        docker exec -it mysql_db mysql -u root -p
        
        Enter the password (1234), and you can interact with the database from within the container.

5. SQL Quick commands:
    
    To show all of the databases within this "instance of SQL":

    `SHOW DATABASES;`

    `SELECT test;` // Or you db name.

    `SHOW TABLES;` // Show the tables inside our "test" database

    `DESCRIBE your_table_name;` // This shows what the schema for the users table is
        
    `SELECT * FROM users;` // You should see the below: As the script initialized it the dummy data.

    mysql> SELECT * FROM users;
    +----+----------+-----------+
    | id | username | password  |
    +----+----------+-----------+
    |  1 | user1    | password1 |
    |  2 | user2    | password2 |
    +----+----------+-----------+
    2 rows in set (0.01 sec)

