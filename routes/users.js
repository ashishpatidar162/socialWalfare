var express = require("express");
var router = express.Router();
var userModel = require("../model/users");

router.post("saveDonationDetails", function(req, res){
  var postData = req.body;
  console.log(" postData ===============",postData);
  userModel.insert(postData, function(err, result){
    console.log("===============",result);
    // res.redirect('/login');
  });
});
module.exports=router;

