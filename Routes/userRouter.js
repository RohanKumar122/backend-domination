const express =require("express")
const router =express.Router()
// const userModel =require("../models/user-model")

router.get("/",function(req,res){
    res.send("hey it's working")
});

module.export =router;