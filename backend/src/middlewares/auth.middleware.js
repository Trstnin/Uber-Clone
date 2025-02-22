const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const User = require('../models/user.models');
const Captain = require('../models/captain.models');
const BlacklistToken = require('../models/blacklistToken.models');

const authUser = async (req,res,next) =>{

 const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
 if(!token){
    res.status(401).json("Unauthorized User");
 }
 
const isBlacklisted = await BlacklistToken.findOne({token:token})


if(isBlacklisted){ 
     return res.status(401).json("Unauthorized User")
 }

 try {

 const decodedToken = jwt.verify(token , process.env.JWT_TOKEN);
 const user = await User.findById(decodedToken._id);
 req.user = user
 return next();

} catch (error) {
    console.log(error);
    res.status(500).json("Internal server error on auth middleware")
 }

} 

const authCaptain = async (req,res,next) =>{

   const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
   if(!token){
      res.status(401).json("Unauthorized User");
   }
   
  const isBlacklisted = await BlacklistToken.findOne({token:token})
  
  if(isBlacklisted){ 
       return res.status(401).json("Unauthorized User")
   }
  
   try {
  
   const decodedToken = jwt.verify(token , process.env.JWT_TOKEN);
   const captain = await Captain.findById(decodedToken._id);
   req.captain = captain
   return next();
  
  } catch (error) {
      console.log(error);
      res.status(500).json("Internal server error on auth middleware")
   }
  } 

module.exports = {authUser,authCaptain}