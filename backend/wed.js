const fs = require('fs');
const http = require('http');

const express = require('express');

let app=express();
	
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get("/",function(req,res){
    res.writeHead(200,{"Content-Type":"application/json"});
     fs.createReadStream(__dirname+"/model/data.json").pipe(res);
	
  });
app.listen(3000);

//const app = require('./app');
//app();
//
// let server=http.createServer(function(req,res){
//
//   fs.createReadStream(__dirname+"/index.html").pipe(res);
//
// });
//
// server.listen(3000);

//var op=fs.createWriteStream("op.txt");


// let data=fs.readFile("data.txt","utf8",function(err,data){
//   console.log(data);
// });
console.log("few lines of code");
console.log("few lines of code");
console.log("few lines of code");
