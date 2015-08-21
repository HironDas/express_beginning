$(document).ready(function(){
    $.get('/blocks', function(blocks){
        var list = [];
        for(var i in blocks){
            list.push($('<li>', {text: blocks[i] }));
        }
        $('.block-list').append(list);
    });
});