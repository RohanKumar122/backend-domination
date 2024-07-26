const mongoose =require('mongoose');
const config =require("config")

const dbgr = require("debug")("development:mongoose")


mongoose.
connect(`${config.get("MONGODB_URI")}/scatch`)
.then(function(){
    dbgr("Connection Stablised!!")
    // console.log("Connection Stablised!!")
})
.catch(function(err){
    console.log("Error: ",err)
})

module.exports = mongoose.connection;

