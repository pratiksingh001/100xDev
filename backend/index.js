const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/sum", function(req, res){
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const sum = num1 + num2
    res.send(sum.toString());
})

app.get("/interest", function(req, res){
    const pri = parseInt(req.query.pri);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);

    const interest = (pri * rate * time) / 100;
    const amount = pri + interest;

    res.status(200).json({
        "tamount" : amount,
        "interest": interest
    })
})

app.listen(3000);