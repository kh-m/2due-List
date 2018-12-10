// Check off specificed todos by clicking them
$('li').click(function () {
   $(this).toggleClass('completed');
});

// Click on X to delete todo
$('span').click(function (e) { 
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});