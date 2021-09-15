/* Template: Pora - Insurance Agency HTML Landing Page Template*/
(function ($) {
	"use strict";

	//AOS Animatjon
	AOS.init({	
		offset: 0, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 900, // values from 0 to 3000, with step 50ms
		easing: 'ease-in-out', // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
	  
	  });

		//OWL-CAROUSEL	
		$(".owl-carousel").each(function () {
			var $Carousel = $(this);
			$Carousel.owlCarousel({
				loop: $Carousel.data('loop'),
				autoplay: $Carousel.data("autoplay"),
				margin: $Carousel.data('space'),
				nav: $Carousel.data('nav'),
				dots: $Carousel.data('dots'),
				dotsSpeed: $Carousel.data('speed'),
				responsive: {
					0: {
						items: $Carousel.data('0')
					},
					600: {
						items: $Carousel.data('600')
					},					
					920: {
						items: $Carousel.data('920')
					},
					1000: {
						items: $Carousel.data('1000'),
					},
					1400: {
						items: $Carousel.data('1400'),
					}
				}
			});
		});

		
	//Sticky Header 
	function updateScroll() {
		if ($(window).scrollTop() >= 80) {
			$(".navbar").addClass('sticky');
		} else {
			$(".navbar").removeClass("sticky");
		}
	}
	$(function () {
		$(window).scroll(updateScroll);
		updateScroll();
	});


		//NAVBAR Scroll		
		var aScroll = $('.nav-item .nav-link'),
		$navbarCollapse = $('.navbar-collapse');
		aScroll.on('click', function (event) {
			var target = $($(this).attr('href'));
			$(this).parent(".nav-item").siblings().removeClass('active');
			$(this).parent('.nav-item').addClass('active');
	
			if (target.length > 0) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top - 70
				}, 1000);
			}
				// If click link and navabr is show
				if ($('.navbar-collapse').hasClass('show')) {
					$('.navbar-collapse').toggleClass('show');
					$('.navbar-toggler-icon').toggleClass('active');
					$('.navbar-toggler').toggleClass('collapsed');
				}
			});

			

  // Background Image
  $("[data-background]").each(function () {
  	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  })


})(jQuery);