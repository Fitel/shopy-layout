$(document).ready(function($) {

	// slider
	$(function() {

		// DOM cache
		var $slide = $('.slide');
		var $slideControl = $('.slide-control');

		$slideControl.first().addClass('active');
		$slide.first().css('display', 'block');

		$slideControl.on('click', function() {
			var index = $slideControl.index( this );

			$slideControl.removeClass('active');
			$(this).addClass('active');

			$slide.each(function(e) {
				$(this).fadeOut();
			});

			$(".slide[data-item=\"" + index + "\"]").fadeIn();

			stopSlider();
		});

		// interval slide

		var interval;
		var counter = 1;

		function startSlider() {
			interval = setInterval(function() {

				var index = counter;

				$slideControl.removeClass('active');
				$slideControl.eq(counter).addClass('active');

				if(++counter === $slide.length) {
					counter = 0;
				}

				$slide.each(function(e) {
					$(this).fadeOut();
				});

				$(".slide[data-item=\"" + index + "\"]").fadeIn();

			}, 3000);
		}

		function stopSlider() {
			clearInterval(interval);
		}


		startSlider();


		$('.slide')
							.on('mouseenter', stopSlider)
							.on('mouseleave', startSlider);

	});
/*
	$('.load-more').on('click', function() {
			$('.load-more').load('product.html');
	});
	*/
});