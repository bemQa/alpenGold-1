if($('.idea-slider').length){
  var mySwiper = new Swiper('.idea-slider', {
    slidesPerView: 3,
    watchSlidesVisibility: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.idea-all .swiper-button-next',
      prevEl: '.idea-all .swiper-button-prev',
    },
    breakpoints: {
    	10: {
        slidesPerView: 3,
      },
      769: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      }
    }
  });

  if($(window).outerWidth() < 750)
    mySwiper.destroy();

  $(window).on('scroll', function(){
    if($(window).outerWidth() < 750)
      mySwiper.destroy();
  });
}

function myPrizes(){
  var mySwiper = new Swiper('.myPrizes-slider', {
    slidesPerView: 1,
    watchOverflow: true,
    navigation: {
      nextEl: '.myPrizes-col .swiper-button-next',
      prevEl: '.myPrizes-col .swiper-button-prev',
    },
  });
}
myPrizes();

$(document).ready(function(){

  //remove in back!!!
  if($(window).outerWidth() > 768)
    setTimeout(function(){ $('.modalMain').addClass('open'); $('.modal-overlay').addClass('open-overlay'); }, 3000);

  $('.myCodes').mCustomScrollbar();
  $('.ideasForAStar-table').mCustomScrollbar();
  $('.myPrizes-head').mCustomScrollbar();

  //scrollbar
  function scrollbar(){
    $('.faq-block').mCustomScrollbar();
  }

  $(window).on('scroll', function(){
    if($(window).outerWidth() > 890)
      scrollbar();
    else{
      $('.faq-block').mCustomScrollbar('destroy');
      $('.myCodes').mCustomScrollbar('destroy');
      $('.ideasForAStar-table').mCustomScrollbar();
      $('.myPrizes-head').mCustomScrollbar();
    }
  });

  if($(window).outerWidth() > 890)
    scrollbar();

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
    $('html,body').toggleClass('scroll-hidden');
		$('.header').toggleClass('header-active');
	});

	//tab
	$('.tab-list li a').on('click', function(e){
		e.preventDefault();

		$(this).parents('.tab-list').find('a').removeClass('active');
		$(this).parents('.allTabs').find('.tab').removeClass('tab-active');

		var attr = $(this).attr('href');
		$(attr).addClass('tab-active');
		$(this).addClass('active');

    setTimeout(function(){ myPrizes(); }, 500);
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

  $('.main-open').on('click', function (e) {
    e.preventDefault();

    if($(window).width() <= 768)
      $(this).find('.main-wrap').toggleClass('active-text');
  });

  $('.prompt-top, .prompt .close-ico').on('click', function (e) {
    e.preventDefault();

    if($(window).width() <= 768)
      $(this).parents('.prompt').toggleClass('active');
  });

  $('.myPrizes-wrap .second-btn').on('click', function (e) {
    e.preventDefault();
    if($(window).width() <= 768)
      $(this).parents('.myPrizes-wrap').find('.prompt').toggleClass('active');
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

	$('.modal-close, .fancybox-close').on('click',function(e){
    e.preventDefault();

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