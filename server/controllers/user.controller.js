import User from "../models/user.model.js"

export const getCurrentUser = async(req,res) =>{
    try {
        const userId = req.userId
        const user = await User.findById(userId)  //yaha User model hai ussi me search horha hai
        if(!user){
            return res.status(404).json({message:"user does not found"})
        }
        return res.status(200).json(user) //current user ki user id bhej rhe ahia fend ko as a res
    } catch (error) {
        return res.status(500).json({message:`failed to get currentUser ${error}`})
    }
}