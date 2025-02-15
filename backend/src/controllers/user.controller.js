
const User = require("../models/user.models")
const { createUser } = require("../services/user.service")



const registerUser = async (req,res) => {
   const {firstName, lastName, email , password } = req.body

   const registeredUser = await User.findOne({email});
   if(registeredUser){
      return res.status(401).json({message:"User already exists"});
   }

   try {
      const hashedPassword = await User.hashedPassword(password);
   
    const user =  await createUser({
       firstName,
       lastName,
       email,
       password:hashedPassword
   })

   const token = user.generateAuthToken();

   res.status(200).json({message: "User created sucessfully" , token , user})
   
   } catch (error) {
      console.log(error);
      res.status(500).json("Internal server error in registerUser ")
   }

}  


const loginUser = async (req,res) => {
   
const {email,password}  = req.body

const user = await User.findOne({email}).select('+password');


if(!user){
   return res.status(401).json("Invalid Email or Password")
}

try {
   
   const isMatch = await user.comparePassword(password);
   

   if(isMatch){
   
    const token = user.generateAuthToken()
   // res.cookie("token", token)
    
    res.status(200).json({message:"User logged in sucessfully" , token:token  })
   }
else{
   res.status(401).json("Invalid Email or Password")
}


} catch (error) {
  console.log(error);
   res.status(500).json("Internal server error in loginUser ")  
}

}

module.exports = { registerUser , loginUser}