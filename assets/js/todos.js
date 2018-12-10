// Check off specificed todos by clicking them
$('ul').on('click', 'li', function () {
   $(this).toggleClass('completed');
});

// Click on X to delete todo
$('ul').on('click', 'span', function (e) { 
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});

// Adds items to list from input field
$("input[type='text']").keypress(function (e) { 
    if(e.which === 13) {
        //grabs the new todo from input
        var todoText = $(this).val();
        //empties input field
        $(this).val("");
        //creates a new li and adds todoText to it
        $('ul').append('<li><span>X</span> ' + todoText + '</li>');
    }
});