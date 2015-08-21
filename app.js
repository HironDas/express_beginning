var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello World!!');
    /*
    * the oblique code of this is ----
    * response.write("Hello world!!");
    * response.end();
    */
});

/*app.get('/blocks', function(request, response) {
    var blocks = ["Fixed", "Movable", "Rotating"];
    // response.send(blocks);
    response.json(blocks); //the oblique/alternate of the previous line
});*/

app.get('/blocks', function(req, res){
    res.redirect(301, '/parts');
});

app.get('/parts', function(request, response){
    response.send("Moved Temporarily. Redirection to /parts");
});

app.listen(process.env.PORT);