var express = require('express');
var app = express();

/*app.get('/', function(request, response){
    response.sendFile(__dirname + '/public/index.html');
});*/

app.use(express.static("public"));


app.listen(process.env.PORT);