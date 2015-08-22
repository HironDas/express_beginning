$(document).ready(function(){
    $.get('/blocks', function(blocks){
        var list = [];
        for(var i in blocks){
            list.push($('<li>', {text: blocks[i] }));
        }
        $('.block-list').append(list);
    });

    $('form').on('submit', function(event){
    	event.preventDefault();
    	var form = $(this);
    	var blockData = form.serialize();

    	$.ajax({
    		type: "Post", url: '/block', data: blockData
    	}).done(function(blockName){
    		appendToList([blockName]);
    		form.trigger('reset');
    	});
    });
});