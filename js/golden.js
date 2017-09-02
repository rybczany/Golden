$(document).ready(function(){
	//
	//$('.hide').hide();
	$('.text-hide').hide();
	$('.btn--circle').on('click', function(){
		$('.hide').slideToggle();
		$(this).toggleClass('active');
		$('.btn--circle h3').toggleClass('active');
		$('.btn--circle h3').toggle();
	});


	//SLICK SLIDER
	
	$('.autoplay').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  speed: 1500,
	});


})

// VANILLA JS
/*------------------------------------------------
var circle = document.querySelector('.btn--circle');

circle.addEventListener('click', function(){
	var hide = document.querySelectorAll('.hide');
	hide.classList.toggle('hide');
	console.log(hide);
});
-------------------------------------------------*/

