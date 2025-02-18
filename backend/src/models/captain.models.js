const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const captainSchema = mongoose.Schema(
  {
    fullName: {
      firstName: {
        type: String,
        required: true,
        minLength: [3, "Firstname must be atleast of 3 character"],
      },
      lastName: {
        type: String,
        required: true,
        minLength: [3, "Firstname must be atleast of 3 character"],
      },
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },
    socketId: {
      type: String,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    vehicle: {
      color: {
        type: String,
        required: true,
      },
      plate: {
        type: String,
        required: true,
      },
      capacity: {
        type: Number,
        required: true,
      },
      vehicleType: {
        type: String,
        required: true,
        enum: ["Car", "Bike", "Scooter"],
      },
    },

    location: {
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      },
    },
  },
  { timestamps: true }
);

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id:this._id}, process.env.JWT_TOKEN, { expiresIn: '24h' });
    return token
}

captainSchema.statics.hashedPassword =async function(password){
    return await bcrypt.hash(password, 10);
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}


const Captain = mongoose.model("Captain", captainSchema);
module.exports = Captain;
