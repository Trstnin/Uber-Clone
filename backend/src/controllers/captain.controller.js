const BlacklistToken = require("../models/blacklistToken.models");
const Captain = require("../models/captain.models");
const createCaptain = require("../services/captain.service");

const registerCaptain = async (req, res) => {
  try {
    const {
     fullName,password,email,vehicle
    } = req.body;

    // Check for existing captain
    const registeredCaptain = await Captain.findOne({ email });

    if (registeredCaptain) {
      return res.status(409).json({
        status: "error",
        message: "Captain already registered"
      });
    }

    // Hash the password
    const hashedPassword = await Captain.hashedPassword(password);

    // Create captain object first
    const captainData = {
     firstName: fullName.firstName,
     lastName: fullName.lastName,
      email,
      password: hashedPassword,
      color:vehicle.color,
      plate:vehicle.plate,
      capacity:vehicle.capacity,
      vehicleType:vehicle.vehicleType

      
    };

    // Create new captain with structured data
    const newCaptain = await createCaptain(captainData);

    const token = newCaptain.generateAuthToken();

    return res.status(201).json({
      status: "success",
      message: "Captain registered successfully",
      token,
      captain: newCaptain
    });

  } catch (error) {
    console.error('Captain registration error:', error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error in registerCaptain",
      error: error.message
    });
  }
};

const loginCaptain = async (req,res) => {
  const {email,password} = req.body

  const user = await Captain.findOne({email}).select('+password');
  
  if(!user) return res.status(400).json("Invalid Email or Password");

  try {
    const isMatch = await user.comparePassword(password)
    
    if(isMatch){
       const token = user.generateAuthToken();
       res.cookie("token", token)
       res.status(200).json({message:"Captain logged in sucessfully" , token:token })
    }else{
         res.status(400).json("Invalid Email or Password")
    }

    
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error in captain login")
  }
}

const getCaptainProfile = async (req,res) =>{
   
  return res.status(201).json({captain:req.captain});

}

const logoutCaptain = async (req,res) =>{
  try {
    res.cookie("token")
   const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    await BlacklistToken.create({token})
    res.status(200).json("Logout sucessfully");
    
  } catch (error) {
    console.log(error)
    res.status(500).json("Internal server error in logout captain")
  }
}

module.exports = { registerCaptain , loginCaptain, logoutCaptain,getCaptainProfile};