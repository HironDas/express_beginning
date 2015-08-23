$(document).ready(function(){
    $.get('/blocks', function(blocks){
        var list = [];
        for(var i in blocks){
            var block = blocks[i];
            var content = '<a href="/blocks/'+block+'">'+block+'</a>';
            list.push($('<li>', {html: content }));
        }
        $('.block-list').append(list);
    });

    $('form').on('submit', function(event){
    	event.preventDefault();
    	var form = $(this);
    	var blockData = form.serialize();
    	console.log(blockData);

    	$.ajax({
    		type: "Post", 
    		url: '/blocks',
    		data: blockData
    	}).done(function(blockName){
    	    console.log(blockName);
    		appendToList([blockName]);
    		form.trigger('reset');
    	});
    });
    
    function appendToList(blocks){
        var list = [];
        var content, block;
        
        for (var i in blocks){
            block = blocks[i];
            content = '<a href="/blocks/'+block+'">'+block+'</a>'+
            '<a href="#" data-block ="'+block+'"><img src="del.png"></a>';
            
            list.push($('<li>', {html: content}));
        }
        
        $('.block-list').append(list);
    }
});