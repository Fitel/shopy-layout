$(document).ready(function($) {
	
	$('.slide-control').on('click', function() {
		$('.slide-control').removeClass('active');
		$(this).addClass('active');
	});

	$('.load-more').on('click', function() {
			$('.load-more').load('product.html');
	});
});