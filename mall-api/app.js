const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.use(cors({origin: ["http://localhost:3000", "http://127.0.0.1:3000"]}));

mongoose.connect("mongodb+srv://admin-swarna:eENsnPzypRAZ0OlT@cluster0.alvs2jv.mongodb.net/ShoppingMall");

const userSchema = new mongoose.Schema({
    username: String,
    email: String
});

const User = mongoose.model("User", userSchema);

app.get('/', function(req, res){
    res.send("Welcome to Shopping Mall!")
});


app.listen(3000, function(){
    console.log("Server Started on Port 3000");
});