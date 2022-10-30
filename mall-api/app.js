const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.get('/', function(req, res){
    res.send("Welcome to Shopping Mall!")
});


app.listen(3000, function(){
    console.log("Server Started on Port 3000");
});