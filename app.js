var express = require('express');
var logger = require("./logger");
var app = express();

/*app.get('/', function(request, response){
    response.sendFile(__dirname + '/public/index.html');
});*/

app.use(logger);

app.use(express.static("public"));

app.get('/blocks', function(request, response){
    var blocks = ["Fixed", "Movable", "Rotating"];
    response.json(blocks);
})


app.listen(process.env.PORT);