import mongoose from "mongoose";
import User from "./user.model.js";
const claimSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    points : Number,
    claimedAt: {
        type:Date,
        default: Date.now
    }
});
const Claim = mongoose.model("Claim",claimSchema);
export default Claim