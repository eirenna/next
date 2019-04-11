;
(function () {
	"use strict";
	$(document).ready(function () {
		$('.ba-portfolio').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			autoplay: true,
			arrows: false,
			centerMode: true,
			variableWidth: true,
			mobileFirst: true,
			responsive: [
				{
					breakpoint: 1905,
					settings: 'unslick'
				}
			]
		});
	});
	let btn = document.querySelector('.ba-menu-toggle');
      let menu = document.querySelector('.ba-menu');
      btn.addEventListener('click', function (e) {
      	menu.classList.toggle('open');
	  });
	  
	  $(window).scroll(function(){
		if ($(window).scrollTop() > 200) {
			$('.ba-header').addClass('ba-scroll');
		}
		else {
			$('.ba-header').removeClass('ba-scroll');
		}
	});  
})();