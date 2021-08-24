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

var element = document.getElementById('product-slider');
if(element){
  /* Swiper
  **************************************************************/
  var swiper = Swiper;
  var init = false;

  /* Which media query
  **************************************************************/
  function swiperMode() {
      var mobile = window.matchMedia('(min-width: 0px) and (max-width: 621px)');
      var tablet = window.matchMedia('(min-width: 621px) and (max-width: 1024px)');
      var desktop = window.matchMedia('(min-width: 1025px)');

      // Enable (for mobile)
      if(mobile.matches) {
        swiper.destroy();
        init = false;
      }

      // Disable (for tablet)
      else if(tablet.matches) {
        if (!init) {
          swiper.destroy();
        	init = false;
        }
      }

      // Disable (for desktop)
      else if(desktop.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.product-slider', {
							loop: true,
						  slidesPerView: 1,
						  watchOverflow: true,
						  navigation: {
						    nextEl: '.swiper-button-next',
						    prevEl: '.swiper-button-prev',
						  },
						});
        }
      }
  }

  /* On Load
  **************************************************************/
  window.addEventListener('load', function() {
      swiperMode();
  });

  /* On Resize
  **************************************************************/
  window.addEventListener('resize', function() {
      swiperMode();
  });

}

$(document).ready(function(){

	$('.faq-block').mCustomScrollbar();

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

	$('.prize-btns .primary-btn').on('click', function (e) {
		e.preventDefault();

		var attr = $('.modal-attr').text();
		$('#' + attr).addClass('open');
		$('.intermediate').addClass('active');
	});

	//product-mark
	$('.product-mark').on('click', function(){
		if($(this).parents('.product-block').hasClass('active')){
			$('.product-block').removeClass('active').find('.product-item').slideUp();
			$(this).find('.product-text').text('Развернуть список');
		}
		else{
			$('.product-block').removeClass('active').find('.product-item').slideUp();
			$(this).parents('.product-block').addClass('active').find('.product-item').slideDown();
			$(this).find('.product-text').text('Свернуть список');
		}
		setTimeout(function(){
			swiper = new Swiper('.product-slider', {
				loop: true,
			  slidesPerView: 1,
			  watchOverflow: true,
			  navigation: {
			    nextEl: '.swiper-button-next',
			    prevEl: '.swiper-button-prev',
			  },
			});
		}, 300);
	});

	//modal
	var modalCont = $('.modal');
		
	$('.modal-btn').on('click',function(e){
		e.preventDefault();

		$(modalCont).removeClass('open');

		var id = '#' + $(this).attr('href');

		if($(this).hasClass('main-tile')){
			$('#confirmation').addClass('open');
			$('.modal-overlay').addClass('open-overlay');
			$('.modal-attr').text($(this).attr('href'));
			$(this).addClass('intermediate');
		}
		else{
			$(id).addClass('open');
			$('.modal-overlay').addClass('open-overlay');
		}
	});

	$('.modal-close, .fancybox-close').on('click',function(){
		$(modalCont).removeClass('open');
		$('.modal-overlay').removeClass('open-overlay');
		$('.intermediate').removeClass('intermediate');
	});

	//forms
	function maskInit() {
	  $('.phone-mask').inputmask({
	    mask: "+7(999)999-99-99",
	    "clearIncomplete": true
	  });
	}
	maskInit();

	function checkValidate() {
    var form = $('form');

    $.each(form, function () {
        $(this).validate({
            ignore: [],
            errorClass: 'error',
            validClass: 'success',
            rules: {
                Region: {
                    required: true
                },
                City: {
                    required: true
                },
                Street: {
                    required: true
                },
                House: {
                    required: true
                },
                File: {
                    required: true
                },
                Text: {
                    required: true
                },
                Checkbox: {
                    required: true
                },
                FullName: {
                    required: true
                },
                LName: {
                    required: true
                },
                FName: {
                    required: true
                },
                MName: {
                    required: true
                },
                Date: {
                    required: true
                },
                Who: {
                    required: true
                },
                Adress: {
                    required: true
                },
                Numbers: {
                    required: true
                },
                Email: {
                    required: true,
                    Email: true
                },
                PhoneNumber: {
                    required: true,
                    PhoneNumber: true
                },
                Message: {
                    required: true
                },
                Password: {
                    required: true,
                    normalizer: function normalizer(value) {
                        return $.trim(value);
                    }
                }
            },
            errorPlacement: function (error, element) {
                var placement = $(element).data('error');
                $('.modal.open form').addClass('error-form');
                setTimeout(function() {
                   $('.modal.open form').removeClass('error-form');
                }, 3000);
                if (placement) {
                    $(placement).append(error);
                } else {
                    error.insertBefore(element);
                }
            },
            messages: {
                PhoneNumber: 'Некорректный номер',
                Email: 'Некорректный e-mail'
            },
        });
    });
    jQuery.validator.addMethod('Email', function (value, element) {
        return this.optional(element) || /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/.test(value);
    });
    jQuery.validator.addMethod('PhoneNumber', function (value, element) {
        return this.optional(element) || /\+7\(\d+\)\d{3}-\d{2}-\d{2}/.test(value);
    });
	}
	checkValidate();

});