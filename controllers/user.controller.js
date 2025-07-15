import User from "../models/user.model.js";
export const getUsers= async (req,res) => {
    const users = await User.find();
    res.status(201).json({message:"Getting the user",users});
}
export const addUser = async (req,res) => {
    const {name} = req.body;
    const newUser = new User({name});
    await newUser.save();
    res.status(201).json({message:"adding the new user",newUser})
}
export const getLeaderboard=async (req,res)=>{
    const leaderboard = await User.find().sort({totalPoints:-1});
    res.status(201).json({message:"getting leaderboard",leaderboard})
}