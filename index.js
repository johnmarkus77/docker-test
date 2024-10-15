import express from 'express';
const app = express();

import accountRoutes from './routes/accountRoutes.js';

app.use(express.json());

app.use('/accounts', accountRoutes);

const PORT = 6001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
