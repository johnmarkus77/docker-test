// Importing the necessary functions from the database layer/library.
import { createUser, getUserByUsername } from '../models/userCreation.js'

/*
    here is where the interaction between the server and DB occurs. Once the client makes a 
    request for a resource like registering a new user, we handle the relevant request here.

    the database "library" of functions, imported from '../database/userCreation.js', defines the
    interface we will interact with in order to perform CRUD operations in the database.

    the main idea is that when the backend server needs to perform a CRUD operation, we can call 
    the relevant function from the database library to create, read, update, etc to the database 
    without having to interact with any of the actual sql queries.

    benefits of this approach:

    1. modularity: Each "layer" has a distinct responsibility, making the code easier to manage  

    2. easier Updates: Changes can be made independently
    
    3. testing: Isolated functions and modules make unit testing easier imo

    4. clear Structure: Easier to reason about the flow of info(imo)

    6. reusable Functions: Functions can be reused across different routes.  

    8. controlled Data Access: stricter controls on how data is accessed and manipulated
    
    9. mocking database calls: when the SQL logic is separate, we can more easily mock database 
       interactions in our tests, allowing for unit tests that focus on the logic of the route 
       handlers without relying on a live database(we may need end up needing integration tests)
*/

/*
    in the example below, when we need to register a user, we simply pass the relevant details to 
    createUser, and that takes care of inserting the user into the database.

    Note: None of this is set in stone, we still need to work out and finalize our schemas and 
    whatnot, this  is mainly to highlight how we can interact with the database and see how a 
    potential request from the frontend eventually flows down to the database.
*/

// Example function to log register a user.
export async function registerUser(req, res) {
    const { username, password } = req.body;

    // database library takes care of creating the user
    const userID = await createUser(username, password );

    console.log('User created with ID:', userID);

    return res.status(200).json({ message: 'User created successfully' });
}

// Example function to log a user in.
export async function loginUser(req, res) {
    const { username, password } = req.body;

    try {
        // database library takes care of getting the user
        const user = await getUserByUsername(username);

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
