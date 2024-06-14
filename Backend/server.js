import express, { json } from "express"
import dotenv from "dotenv"
import cors from "cors"
import { databaseConnection } from "./DB/connection.js"
import { signupRouter,loginRouter } from "./Routes/user.route.js"


const app=express()
dotenv.config()




//middleware

app.use(cors())
app.use(express.json())


databaseConnection()

app.use("/user",signupRouter)
app.use("/user",loginRouter)



app.listen(process.env.PORT || 8080,()=>{

    console.log(`the app is listning on ${process.env.PORT ||8080}`)
})