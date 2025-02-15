const User = require("../models/user.models.js");

const createUser = async ({
    firstName, lastName , email, password
}) =>{

    if( !firstName || !email || !password ){
        throw new Error("All fileds are required");
    }
 
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