const express = require('express');
const jwt = require("jsonwebtoken");
const jwtPassword = "12345"

const app = express();

const ALL_USERS = [
  {
    userName: "pratik@gmail.com",
    password: "12345",
    name: "Pratik"
  },
  {
    userName: "batti@gmail.com",
    password: "1234567",
    name: "Yathaarth"
  },
  {
    userName: "madhuri@gmail.com",
    password: "12345678",
    name: "Madhur"
  }
];


app.use(express.json());

function userExist(userName, password){
  var check = false;
  ALL_USERS.map((user) => {
    if(user.userName == userName && user.password == password){
      check = true;
    }
  })
  // ALL_USERS.find((user)=>{

  // })
  return check;
}

app.post("/signin", function(req, res){
  const userName = req.body.username;
  const password = req.body.password;
  
  if(!userExist(userName, password)){
    return res.status(403).json({
      msg: "User doesn't exist"
    })
  }

  var token = jwt.sign({userName: userName}, jwtPassword);
  return res.status(200).json({
    token
  })
})

app.get("/users", function(req, res){
  const token = req.headers.authorization;
  try{
    const decoded = jwt.verify(token, jwtPassword);
    const userName = decoded.userName;
    // return a list of users other than this userName
    return res.status(200).json({
      users: ALL_USERS.filter((value)=>{
        if(value.userName == userName){
          return false;
        }else{
          return true;
        }
      })
    })
  }catch(err){
    return res.status(403).json({
      msg: "Invalid token"
    })
  }
})

app.listen(3000);