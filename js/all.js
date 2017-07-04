$(document).ready(function() {
	$('.view h2').addClass('active');
	$('.view h3').addClass('active');
$(function () {
  $(window).scroll(function () {
    	var scrollVal = $(this).scrollTop();
		var headerH = $('.header').position().top;
		var viewH = $('.view').position().top;
		var contentH = $('.content').position().top;
		var introH = $('.intro').position().top;
		if(  scrollVal > contentH/2){
		$('.animateJsUp').addClass('active');
		}
		if(scrollVal > introH-100){
			$('.animateJsDown').addClass('active');
		}
	});
});

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