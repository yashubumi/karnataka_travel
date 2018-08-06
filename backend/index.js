const fs = require('fs');
const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb://yashu:yashu123@ds115749.mlab.com:15749/karnatakatourism");


let app=express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


let locationSchema=new mongoose.Schema({
  firstname:String,
  lastname:String,
  mailid:String,
  members:Number,
  package:Number,
  arrivaldate:String,
  phoneno:String,
  address:String,
  price:Number
});


let locationModel=mongoose.model("location",locationSchema);

let feedbackSchema=new mongoose.Schema({
	review:String,
	comments:String,
	name:String,
  email:String,

  });



	let contactSchema=new mongoose.Schema({
		name:String,
	  email:String,
	  mobile:Number,
		requirement:String
	 });


let feedbackModel=mongoose.model("feedback",feedbackSchema);


let contactModel=mongoose.model("contact",contactSchema);

app.use(bodyParser.json());

app.post("/bangalore",function(req,res){
  console.log("---location---");
  console.log(req.body);
  locationModel(req.body).save(function(err,data){
    console.log(data);
  }
  );

});



	app.post("/feedback",function(req,res){
  console.log(req.body);
feedbackModel(req.body).save(function(err,data){
   if(err) throw err;
  res.json({"message":"Thank you for feedback"});
});

});



app.post("/contact",function(req,res){
console.log(req.body);
contactModel(req.body).save(function(err,data){
if(err) throw err;
  res.json({"message":"Thank you for contacting us"});
});

});



app.listen(3000);
console.log("few lines of code");
console.log("few lines of code");
console.log("few lines of code");
