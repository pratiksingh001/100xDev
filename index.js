const express = require("express");
const zod = require("zod")

const app = express();

app.use(express.json()); 

app.post("/health-checkup", function(req, res) {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send(`You have ${kidneyLength} kidneys`)
});

app.use(function(err, req, res, next){
  res.json({
    msg: "Something is bad with our server"
  })
})

app.listen(3000);