import Claim from '../models/claim.model.js'
import User from '../models/user.model.js'

export const claimPoints = async (req,res) =>{
    const {userId} = req.body;
    const points = Math.floor(Math.random()*10)+1;
    
    const user = await User.findById(userId);
    if(!user){
        return res.status(404).json({message:"user not found"})
    };
    user.totalPoints += points;
    await user.save();
    
    const history = new Claim({userId,points});
    await history.save();

    res.status(201).json({message:"updating user and history",user, points});
}

export const getClaimHistory = async (req,res)=>{
    const {userId} = req.params;
    const history = await Claim.find({userId}).sort({claimedAt:-1});
    res.status(201).json({message:"getting claim history",history});
}