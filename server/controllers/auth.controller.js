import genToken from "../config/token.js"
import User from "../models/user.model.js"


export const googleAuth = async ( req,res ) =>{
    try {
        const { name , email} = req.body
        let user = await User.findOne({email})
        if(!user){
            user = await User.create({
                name,
                email
            })
        }
        let token = await genToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:true, //to run on http (local host) //true when we use https
            sameSite:"none",
            maxAge:7*24*60*60*1000 //in milli seconds ( 7 days)
        })  
        return res.status(200).json(user)


    } catch (error) {
        return res.status(500).json({message:`Google auth error ${error}`})
    }
}


export const logOut = async ( req,res) =>{
    try {  //cookies clear krdo matlab user log out hai 
        //cookies clear kara do jisse usko current user milega hi nhi 
        await res.clearCookie("token")  //token naamak cookie ko clear krna hai
        return res.status(200).json({message:"LogOut Successfully"})
    } catch (error) {
        return res.status(500).json({message:`LogOut error ${error}`})
    }
}