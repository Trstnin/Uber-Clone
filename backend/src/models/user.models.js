const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
  
  fullName: {
    firstName: {
      type: String,
      required: true,
      minLength: [3, "First name should be atleast of 3 character or long"],
    },

    lastName: {
      type: String,
      minLength: [3, "Last name should be atleast of 3 character or long"],
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, "Email must be atleast of 5 character or long "],
  },

  password: {
    required: true,
    type: String,
    select:false
  },

  socketId: {
    type: String,
  },
}, 
{
  timestamps:true
}
);


userSchema.methods.generateAuthToken =  function ()   {
         const token = jwt.sign({ _id: this._id} , process.env.JWT_TOKEN)
         return token;
}

userSchema.methods.comparePassword = async function (password) {
  const result =  await bcrypt.compare(password, this.password);
  return result;
}

userSchema.statics.hashedPassword = async function (password)  {
    return await bcrypt.hash(password, 10)
}


const User = mongoose.model("User", userSchema);



module.exports = User;
