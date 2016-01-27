$(document).ready(function() {

	$('li').on('click', function(){
		console.log("You clicked.");
	});
	$('#submitnew').on('click', function(e) {
		e.preventDefault();
		var $newThing = $('#newtodo input').val();
		console.log ($newThing);
		$('#item').val("");
	

     $('ul').append('<li><span>X </span>' + $newThing + '</li>');
      $('ul').on('click', 'li span', function () {
        console.log("Item clicked");
       $('#item').val("");
        $(this).parent().remove();
	});
  	$(function() {
    $('ul').sortable();
    $('ul').disableSelection();
 	 });
});
  //     $('#sortlist').on('click', function(e) {
		// e.preventDefault();
		// $('ul').sortable ({
		// 	sort: function()
		// })
	
});