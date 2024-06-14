import express from "express"
import { signup,login } from "../Controllers/user.controller.js"


const signupRouter=express.Router();
const loginRouter=express.Router()

signupRouter.post("/signup",signup)

loginRouter.post("/login",login)


export{signupRouter,loginRouter}