const User = require("../models/user.models.js");

const createUser = async ({
    firstName, lastName , email, password
}) =>{

     const newUser = await User.create({
       fullName:{
        firstName,
        lastName
       },
        email,
        password
    })

    return newUser
 
}

module.exports = {createUser}