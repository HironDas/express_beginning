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

    if (request.query.limit >= 0) {

    	response.json(blocks.slice(0, request.query.limit));

    }else {

    	response.json(blocks);
    }
});


app.listen(process.env.PORT|| 3000);