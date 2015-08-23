var express = require('express');
var app = express();
var logger = require("./logger");


app.use(express.static("public"));
app.use(logger);


var blocks = require('./routes/blocks');


app.use("/blocks", blocks);


app.listen(process.env.PORT|| 3000);