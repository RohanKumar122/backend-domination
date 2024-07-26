const express =require("express")
const router =express.Router()
// const productModel =require("../models/product-model")

router.get("/",function(req,res){
    res.send("hey it's working")
});

module.export =router;