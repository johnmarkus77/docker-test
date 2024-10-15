import express from "express";
import * as accountController from '../controllers/accountController.js';

/*
    Here we define an example POST routes for the /login and /register paths.

    When the frontend(client) makes a POST request to these paths,
    the corresponding function from accountFunctions are invoked to handle the request.

    - accountFunctions -> login handles the /login route logic.
    - accountFunction ->  register handles the /register route logic.
*/

const router = express.Router();
router.post('/register', accountController.registerUser);

export default router;
