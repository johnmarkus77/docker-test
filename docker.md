# Docker steps:

Install Docker app through:

    MacOS: https://docs.docker.com/desktop/install/mac-install/

    Windows(or WSL 2): https://docs.docker.com/desktop/install/windows-install/

1. Pull the code from this repo: https://github.com/johnmarkus77/docker-test

    a. initialize an empty directory and run: git intit

    b. run: git remote add origin https://github.com/johnmarkus77/docker-test.git                                                                                                            ok | system node | 05:17:41 PM

    c. run: git fetch origin

    d. run: git pull origin main


2. run npm install to get all of the dependecies up and running

3. Open the Docker desktop app aka the "Docker dameon"

4. Run the following command inside the root directory where you pulled the repo above ^
    
    `docker-compose up -d`

    You should see something like:
    > docker-compose up -d
    [+] Running 2/2
     ✔ Network test_backend  Created                                                                         
     ✔ Container mysql_db    Started                                                                         


5. You can check if the container is running using:
    
    `docker-compose ps`

    You should see something like:
    > docker-compose ps
    NAME       IMAGE       COMMAND                  SERVICE   CREATED              STATUS              PORTS
    mysql_db   mysql:8.0   "docker-entrypoint.s…"   db        About a minute ago   Up About a minute   0.0.0.0:3306->3306/tcp, 33060/tcp


7. Check that we can access the SQL db within the container
    To view logs for the MySQL container:
        docker-compose logs db

    To  connect to the SQL instance inside the container and use the CLI:

        `docker exec -it mysql_db mysql -u root -p`
        
    Enter the password (1234), and you can interact with the database from within the container.

8. SQL Quick commands:
    
    To show all of the databases within this "instance of SQL":

    `SHOW DATABASES;`

    `USE test;` 

    `SHOW TABLES;` 

    `DESCRIBE your_table_name;` 
        
    `SELECT * FROM users;` 

    mysql> SELECT * FROM users;
    +----+----------+-----------+
    | id | username | password  |
    +----+----------+-----------+
    |  1 | user1    | password1 |
    |  2 | user2    | password2 |
    +----+----------+-----------+
    2 rows in set (0.01 sec)


9. run the server: `node index.js`

10. test out inserting a dummy user into your local sql db:

    `
    curl -X POST http://localhost:6001/accounts/register \
    -H "Content-Type: application/json" \
    -d '{"username": "testUser", "password": "testPassword"}'

    `

11. Open a new terminal in your root dir:

    a. run: `docker exec -it mysql_db mysql -u root -p`

    b. enter password

    c.  ```USE test;```

    d. ``` SELECT * FROM users; ```

    e. you should see the new user from the table above inserted 



12. To stop the container and kill the db:

    `docker-compose down`
