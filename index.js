const express = require('express');

const app = express();

app.get("/health-checkup", function (req, res){
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if(username != "pratik" || password != "pass"){
    res.status(400).json({msg: "Something is not good with your input"})
  }

  if(kidneyId != 1 && kidneyId != 2){
    res.status(400).json({msg: "something is wrong with your input"})
  }

  res.status(200).json({msg:"Hurray!! everything is good"})
})

app.listen(3000) 