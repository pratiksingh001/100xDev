const express = require('express');

const app = express();

function userMiddleWare(req, res, next){
  const userName = req.headers.userName;
  const password = req.headers.password;

  if(userName != "Pratik" || password != "Pass"){
    res.status(403).json({
      msg: "Incorrect Creds"
    })
  }else{
    next();
  }
}

function kidneyMiddleWare(req, res, next){
  const kidneyId = req.query.kidneyId;

  if(kidneyId != 1 || kidneyId != 2){
    res.status(403).json({
      msg: "Incorrect kidney no."
    })
  }else{
    next();
  }
}

app.get("/health-checkup", userMiddleWare, kidneyMiddleWare, function(req, res){
  res.status(200).json("Hurray!!!!");
})

app.listen(3000) 