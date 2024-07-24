const mongoose =require("mongoose");


const userSchema =mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:true,
    },
    email :String,
    passord:String,
    cart:{
        type:Array,
        dafault:[],
    },
    isadmin:Boolean,
    orders:{
        type:Array,
        default:[],
    },
    contact:Number
})

module.exports =mongoose.model("user",userSchema);