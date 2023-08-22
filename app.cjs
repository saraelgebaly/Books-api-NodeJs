const bodyParser=require('body-parser')
const mongoose= require("mongoose")
const express = require ('express')
const userRouter= require('./Routes/user.cjs')
const bookRouter = require('./Routes/book.cjs')
const app = express()
app.use(bodyParser.json())
const url= "mongodb+srv://Sara:123mag123@cluster0.lnievur.mongodb.net/mag?retryWrites=true&w=majority"
const connectDB =async()=>{
    try {
        mongoose.set('strictQuery',false)
        mongoose.connect(url)
        console.log("Connected to Mongo DB")
    } catch(err){
        console.log("error while connect to mongo"+ err) 
        process.exit()
    }
}
connectDB() 
app.use('/', userRouter)
app.use('/', bookRouter)
app.listen(5000)