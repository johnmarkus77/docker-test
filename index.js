import express from 'express';
const app = express();
const PORT = 6001;

import accountRoutes from './routes/accountRoutes.js';

app.use(express.json());


app.use('/accounts', accountRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
