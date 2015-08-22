var express = require('express');
var logger = require("./logger");
var app = express();

/*app.get('/', function(request, response){
    response.sendFile(__dirname + '/public/index.html');
});*/

app.use(logger);

app.use(express.static("public"));

app.get('/blocks', function(request, response){
    // var blocks = ["Fixed", "Movable", "Rotating"];

    if (request.query.limit >= 0) {

    	response.json(blocks.slice(0, request.query.limit));

    }else {

    	response.json(Object.keys(blocks));
    }
});

var blocks = {
	'Fixed': 'Fastened securely in position',
	'Movable': 'Capable of being moved',
	'Rotating': 'Moving in a circle around its center'
};

var location = {
	'Fixed' : 'First floor',
	'Movable' : "Second floor",
	'Rotation' : "Penthouse"
};

app.param('name', function(request, response, next){
	var name = request.params.name;
	var block = name[0].toUpperCase() + name.slice(1).toLowerCase();

	request.blockName = block;
	next();
});

app.get('/blocks/:name', function(request, response){
	var description = blocks[request.blockName];
	if(!description) {
		response.status(404).json("No description found for " + request.param.name);
	} else {
		response.json(description);
	}
});

app.get('/location/:name', function(request, response){
	var description = location[request.blockName];
	if(!description) {
		response.status(404).json("No description found for " + request.param.name);
	} else {
		response.json(description);
	}
});


app.listen(process.env.PORT|| 3000);