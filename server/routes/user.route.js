import express from "express"
import isAuth from "../middlewares/isAuth.js"
import { getCurrentUser } from "../controllers/user.controller.js"

const userRouter = express.Router()

userRouter.get("/current-user",isAuth,getCurrentUser)  //route -> mw -> controller       



export default userRouter