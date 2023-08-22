const userModel = require('../Models/user.cjs')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')



exports.register = async function(req,res){
    try{
        let newUser= new userModel(req.body)

       const hash= await bcrypt.hash(req.body.password,10)
        newUser.password = hash
        let user = await newUser.save()
        return res.json({message:"User Registered Successfully",user:{name:user.name,email:user.email,id:user._id}})
        

    } catch (err){
        return res.status(400).send({message:err}) 
    }
    
}
exports.login = async function(req,res){
    try{
 let user= await userModel.findOne({email:req.body.email})
 if(!user){
return res .status(401).json({message:"Invalid email or password"})
 }
 let userPassword= await user.comparePassword(req.body.password)
 if(!userPassword){
    return res .status(401).json({message:"Invalid email or password"})
 } 
 const token =jwt.sign({name:user.name,email:user.email,id:user._id},'secuirtkey')
 return res.json({message:"User Logged in Successfully",user: {name:user.name,email:user.email,id:user._id,token:token}})
    } catch (err){
        return res.status(400).send({message:err})
    }
}   