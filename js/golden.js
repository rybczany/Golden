$(document).ready(function(){

	$('.hide').hide();
	$('.text-hide').hide();
	$('.btn--circle').on('click', function(){
		$('.hide').slideToggle();
		$(this).toggleClass('active');
		$('.btn--circle h3').toggleClass('active');
		$('.btn--circle h3').toggle();
	});

})