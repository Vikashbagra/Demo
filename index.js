// require('dotenv').config()
const express = require("express");
const app = express();
const port =  process.env.PORT

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index") 
});

app.listen(port,()=>{
  console.log(`Your Serve is started on Port ${port}`)
}) 