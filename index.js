const express = require("express");
const app = express();


app.get("/random_name/",(req,res)=>{
    i=Math.floor(Math.random()*3);
    res.send(i);
});


app.get("/",(req,res)=>{
    res.send("Welcome!")
});

app.listen("3005",()=>{
    console.log("listening")
});