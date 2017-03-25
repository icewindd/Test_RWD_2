$(document).ready(function() {

	$(function(){
		$('.js-bar').click(function(e){
		e.preventDefault();
			$('.js-menu').slideDown();
		});
		$('.js-menuClose').click(function(e){
			e.preventDefault();
		$('.js-menu').slideUp();
		});

	});
});