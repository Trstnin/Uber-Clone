const mongoose = require('mongoose');

const dbConnect = async() =>{
  
    try {

     await mongoose.connect(process.env.MONGO_DB_URI);
     console.log("Connected to Database ")

        
    } catch (error) {
         console.log(error)
         res.status(500).json("Internal server error in dbConnect");
        }


}

module.exports = dbConnect

