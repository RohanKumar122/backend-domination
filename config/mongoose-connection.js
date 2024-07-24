const mongoose =require('mongoose');

mongoose.
connect("mongodb://127.0.0.1:27017/scatch")
.then(function(){
    console.log("Connection Stablised!!")
})
.catch(function(err){
    console.log("Error: ",err)
})

module.exports = mongoose.connection;