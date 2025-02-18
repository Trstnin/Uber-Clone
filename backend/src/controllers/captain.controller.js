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

module.exports = { registerCaptain };