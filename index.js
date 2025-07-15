import express from 'express'
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'
import UserRoutes from './routes/user.routes.js'
import ClaimRoutes from './routes/claim.routes.js'
dotenv.config()
const app = express();
const port = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());
app.use('/api/users',UserRoutes);
app.use('/api/claims',ClaimRoutes);
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected');
  app.listen(port, () => console.log(`Server running on port ${port}`));
}).catch(err => console.error(err));