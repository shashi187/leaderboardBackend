import express from 'express'
import {getUsers,addUser,getLeaderboard} from '../controllers/user.controller.js'
const router = express.Router();

router.get("/",getUsers);
router.post("/",addUser);
router.get("/leaderboard",getLeaderboard);

export default router;