// Check off specificed todos by clicking them
$('li').click(function () {
   $(this).toggleClass('completed');
});