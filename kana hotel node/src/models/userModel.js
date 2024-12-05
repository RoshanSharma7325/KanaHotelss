const mongoose = require("mongoose")

const schema = mongoose.Schema({
    Nuber:{
        type:Number,
        require:true
    },
    Email:{
        type:String,
        require:true  
    },
 
})

const usemodel = mongoose.model("usedata",schema)
module.exports = usemodel