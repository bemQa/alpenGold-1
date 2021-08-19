var swiper = new Swiper('.main-story__wrapper', {
  slidesPerView: 8,
  freeMode: true,
  watchSlidesVisibility: true,
  mousewheel: true,
  watchOverflow: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
  	10: {
      slidesPerView: 'auto',
    },
  	600: {
      slidesPerView: 5,
    },
    650: {
      slidesPerView: 6,
    },
    769: {
      slidesPerView: 5,
    },
    970: {
      slidesPerView: 6,
    },
    1100: {
      slidesPerView: 8,
    }
  }
});

var swiper = new Swiper('.categories-wrapper', {
	slidesPerView: 'auto',
  freeMode: true,
  mousewheel: true,
  watchOverflow: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.news-slider', {
  slidesPerView: 1,
  watchOverflow: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

$(document).ready(function(){

	//menu mob
	$('.footer-toggle').on('click', function(){
		var block = $('.footer');
		if($(block).hasClass('active')){
			$(block).removeClass('active').find('.footer-wrap').slideUp();
			$('.footer-toggle').text('Юридическая информация. Развернуть');
		}
		else{
			$(block).addClass('active').find('.footer-wrap').slideDown();
			$('.footer-toggle').text('Юридическая информация. Свернуть');
		}
	});

	//menu mob
	$('.header-bar').on('click', function(){
		$('.header').toggleClass('header-active');
	});

	//tile
	$('.main-tile').on('click', function(e){
		$(this).toggleClass('active');
	});

	//tab
	$('.tab-list li a').on('click', function(e){
		e.preventDefault();

		$(this).parents('.tab-list').find('a').removeClass('active');
		$(this).parents('.allTabs').find('.tab').removeClass('tab-active');

		var attr = $(e.target).attr('href');
		$(attr).addClass('tab-active');
		$(this).addClass('active');

		//if($(window).width() < 840 && $(this).parents('.steps'))
		//	$('html, body').animate({scrollTop : $('#steps').offset().top + ($('#steps').outerHeight() - $(window).height())},300);
		//setTimeout(function(){ $('.portfolio-slider').slick('refresh'); }, 100);
	});

	//accordeons
	$(".accordeon .accordeon-block").hide().prev().click(function() {

		if($(this).parents(".accordeon").hasClass('accordeon-active'))
			$(".accordeon").removeClass('accordeon-active');
		else {
			$(".accordeon").removeClass('accordeon-active');
			$(this).parents(".accordeon").addClass('accordeon-active');
		}

		$(this).parents().find(".accordeon-block").not(this).slideUp().prev();
		$(this).next().not(":visible").slideDown().prev().parents();

	});

	//mask
	$('.input-tel').mask( '+' + '7 (999) 999-99-99');

	//fancybox
	$('[data-fancybox=""]').fancybox({
    autoFocus: false,
    autoCenter: false,
    touch: false
	});

	$('.prize-btns .primary-btn').on('click', function (e) {
		e.preventDefault();

		$(this).parents('.modal').addClass('active');
	});

	$('.fancybox-close').click(function (e) {
		e.preventDefault();

		$.fancybox.close();
		return false;
	});

});