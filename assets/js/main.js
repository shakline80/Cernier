(function ($) {
	"use strict";

    jQuery(document).ready(function($){

		//===== Sticky Menu-Bar Start
		$(window).on('scroll',function(event) {    
			var scroll = $(window).scrollTop();
				if (scroll < 100) {
					$(".header-bar-area").removeClass("sticky");
				}else{
					$(".header-bar-area").addClass("sticky");
				}
			});
		//===== Sticky Menu-Bar End




				// Owl-Carousel Plugin Active Start
		$(".hero-slider-wrapper").owlCarousel({
			items:1,
			nav:true,
			dot:true,
			margin:0,
			loop:true,
			autoplay:false,
			autoplayTimeout:3000,
			smartSpeed:1000,
			navText: ["<img src='assets/img/prev.svg'>","<img src='assets/img/next.svg'>"]

		});
		// Owl-Carousel Plugin Active End


		
			// Owl-Carousel Plugin Active Start
			$(".testimonial-slider-wrapper").owlCarousel({
				items:3,
				nav:true,
				dot:true,
				margin:40,
				loop:true,
				autoplay:true,
				autoplayTimeout:3000,
				smartSpeed:1000,
				responsiveClass:true,
				center:true,
				navText: ["<img src='assets/img/arrow-left.svg'>","<img src='assets/img/arrow-right.svg'>"],
				responsive : {
					// breakpoint from 0 up
					0 : {
						items:1,
						center:false,
						nav:false,
						margin:0
					},
					// breakpoint from 480 up
					480 : {
						items:1,
						center:false,
						nav:false,
						margin:0
					},
					// breakpoint from 768 up
					768 : {
						items:2,
						margin:20,
					},
					992 : {
						items:3,
						margin:25,
					},
					1300 : {
						margin:30,
					}
				}
	
			});
			// Owl-Carousel Plugin Active End


		//===== Responsive mainmenu Start
		$('#mobile-menu-active').meanmenu({
			meanScreenWidth: "767",
			meanMenuContainer: '.menu-prepent',
			onePage: true,
		});
	   //===== Responsive mainmenu End
		
	});



    jQuery(window).load(function(){


    });


}(jQuery));	