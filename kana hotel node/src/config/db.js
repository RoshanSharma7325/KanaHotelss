const mongoose = require("mongoose");

const connection = async () =>{
    await mongoose.connect("mongodb://localhost:27017/ravi");

    console.log("mongoose connect");
 
}

connection()

module.exports = connection