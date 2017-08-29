$(document).ready(function(){

	$('.hide').hide();
	$('.text-hide').hide();
	$('.btn--circle').on('click', function(){
		$('.hide').slideToggle();
		$(this).toggleClass('active');
		$('.btn--circle h3').toggleClass('active');
		$('.btn--circle h3').toggle();
	});

	$('.autoplay').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	});


})