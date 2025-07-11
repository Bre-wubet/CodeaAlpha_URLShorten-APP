import express from 'express';
import cors from 'cors';

import errorHandler from './middleware/errorHandler.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/urlRoutes.js';

const app = express();
app.use(cors());

dotenv.config();

app.use(express.json());
// routes
app.use('/api/urls', router);
// Error handling middleware
app.use(errorHandler);

export default app;

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});