const express = require("express");

const router=express.Router();

const {getBlogDetails}= require("../controllers/API")

router.post("/getDetails",getBlogDetails)

module.exports=router