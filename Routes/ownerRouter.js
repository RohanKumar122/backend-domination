const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    let owners = await ownerModel.find();
      if (ownerModel.length > 0){
        return res
          .send(501)
          .send("You don't have the permisssion to create new owner.");
        }
        res.send("We can Create a new owner.")
    });
}

router.get("/", function (req, res) {
  res.send("hey it's working");
});

module.export = router;
