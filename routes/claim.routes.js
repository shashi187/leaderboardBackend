import express from 'express'
import { claimPoints,getClaimHistory } from '../controllers/claims.controller.js';
const router = express.Router();

router.post("/",claimPoints);
router.get("/:userId",getClaimHistory);

export default router;