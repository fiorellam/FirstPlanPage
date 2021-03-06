/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');
		$sectionOne = $('#one');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
			
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
	$(document).ready(main);

	var contador = 1;

	function main(){
		$('#menu_barr_id').click(function (){
			console.log("que tranzuki por tus venukis");
			if(contador == 1){
				$('nav').removeClass("header_nav");
				$('nav').addClass("header_nav_click");
				$('#menu_barr_id').removeClass("menu_barr2");
				$('#menu_barr_id').addClass("menu_barr_click");
				contador = 0;
			}else{
				contador = 1;
				$('nav').addClass("header_nav");
				$('nav').removeClass("header_nav_click");
				$('#menu_barr_id').addClass("menu_barr2");
				$('#menu_barr_id').removeClass("menu_barr_click");
			}
		})
	}

		// $('#menu')
		// 	.append('<a href="#menu" class="close"></a>')
		// 	.appendTo($body)
		// 	.panel({
		// 		delay: 500,
		// 		hideOnClick: true,
		// 		hideOnSwipe: true,
		// 		resetScroll: true,
		// 		resetForms: true,
		// 		side: 'right',
		// 		target: $body,
		// 		visibleClass: 'is-menu-visible'
		// 	});
		$(function (){
			$(window).scroll(function(){
				if ($(this).scrollTop() > 700){
					$('#header').addClass("azul");
					$('#header').removeClass("alt");
				}else{
					$('#header').removeClass("azul");
					$('#header').addClass("alt");
				}
			});
		})

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);