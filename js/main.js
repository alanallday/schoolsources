
var loaded = false;

 $(window).on('load', function () {
	if (loaded == false) {
		$('body').addClass('loaded');
		loaded = true;
	}
});

setTimeout(function() {
	if (loaded == false) {
		$('body').addClass('loaded');
		loaded = true;
	}
},2500);


$(document).ready(function() {
	convertRichText();
	$('.rich_text blockquote').addClass('stretched');
	$(window).resize(function(){
		sizeStretchedText();
		featuredCoursesBlock();
		courseHeader();
	});
	addBodyClass();
	twoUp();
	sizeStretchedText();
	imageModule();
	testimonialBlock();
	couponCode();
	featuredCoursesBlock();
	courseHeader();
	pageHeader();
	alumniPage();
	globalNav();
	animateLines();
	initSkrollr();
	loginPage();
	addCoursePageLinkID();
	curriculumBlock();
	checkoutBlock();
	addPageHeader();
});

function curriculumBlock() {
	if( !$.trim($('.curriculum.block .section-days-to-drip-number').html()).length ) {
		$('.curriculum.block .section-days-to-drip-number').parent().remove();
	}
}

function checkoutBlock() {
	$('.checkout.block .product-details').removeClass('col-sm-9');
	$('.checkout.block .product-price').removeClass('col-sm-2');
	// $('.checkout.block .product-details .detailed-description').each(function() {
	// 	$(this).insertAfter($(this).parent().parent().find('.product-price'));
	// });

	$('.checkout.block .product-price').each(function(){
	    $(this).html($(this).html().replace(/&nbsp;/gi,''));
	});

	var $length = $('.checkout.block .btn.checkout-button-group').length;

	console.log($length);

	if ($length == 1) {
		$('.checkout.block .btn.checkout-button-group').addClass('col-sm-12');
	}

	if ($length == 2) {
		$('.checkout.block .btn.checkout-button-group').addClass('col-sm-6');
	}

	if ($length == 3) {
		$('.checkout.block .btn.checkout-button-group').addClass('col-sm-4');
	} 

	if ($length == 4) {
		$('.checkout.block .btn.checkout-button-group').addClass('col-sm-3');
	} 

	if ($('.checkout.block .product-list').hasClass('hidden')) {

	} else {
		$('.checkout.block .button-container').addClass('hidden');
	}

	console.log('change1');

	// $('.checkout.block  #enroll-button').parent().parent().addClass('button-container');
	// $('.checkout.block .product-list').addClass('row');
	// // $('.checkout.block .btn-primary').removeClass('btn-sm');
	// $('.checkout.block .product-list').removeClass('col-sm-12');
	// $('.checkout.block .col-xs-10.col-xs-offset-1.col-md-8.col-md-offset-2').removeClass('col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1').addClass('col-xs-12');
}

function addBodyClass() {
	if($('.page-header h1').text() == 'All Courses') {
		$('body').addClass('all-courses');
	}

	else if($('body').attr('data-pagename') == 'Alumni') {
		$('body').addClass('alumni-page');
		$('body').addClass('alumni');
	} 

	else if ($('body').hasClass('course-page')) {
	}

	else if ($('.content-box h1').text().indexOf('Log In to School') >= 0) {
		$('body').addClass('login-page');		
	}
	else {
		$('body').addClass('standard-page');		
	}
}

function loginPage() {
	$('body.login-page .text-center.col-lg-6.col-lg-offset-3').removeClass('col-lg-6 col-lg-offset-3').addClass('col-lg-8 col-lg-offset-2');
}
function addPageHeader() {
	if ($('body').hasClass('standard-page')) {
		if($('.page-header').length > 0) {

		} else {
			//add page
			var $pageTitle = $('body').attr('data-pageName');
			var $html ='<div class="page-header"><div class="headline"><span class="star"><svg width="21px" height="20px" viewBox="0 0 21 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Free-Resources---Article" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-329.000000, -2832.000000)"><polygon id="Star" fill="#000000" points="339.5 2848.58359 333.010643 2852 334.25 2844.76393 329 2839.63932 336.255322 2838.58359 339.5 2832 342.744678 2838.58359 350 2839.63932 344.75 2844.76393 345.989357 2852"></polygon></g></svg></span><h1 class="serif stretched">' + $pageTitle + '</h1><span class="star"><svg width="21px" height="20px" viewBox="0 0 21 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Free-Resources---Article" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-329.000000, -2832.000000)"><polygon id="Star" fill="#000000" points="339.5 2848.58359 333.010643 2852 334.25 2844.76393 329 2839.63932 336.255322 2838.58359 339.5 2832 342.744678 2838.58359 350 2839.63932 344.75 2844.76393 345.989357 2852"></polygon></g></svg></span></div></div>' 	
			$('.blocks-page.blocks-page-rich_text').insertBefore($html);
		}
	}
}
function globalNav() {
	$('nav.global .menu').click(function(){
		$('nav.global').toggleClass('open');
	});
}
function sizeStretchedText() {
	$('.stretched').each(function() {
		var padding = $(this).height()/4;
		$(this).css({
		'margin-top' : padding,
		'margin-bottom' : padding
		});
	});
};

function addCoursePageLinkID() {
	$('.bio.block').attr('id','instructor');
	$('.curriculum.block').attr('id','curriculum');
}
function twoUp() {
	$('.two-up').wrapAll('<div class="row"/>');
	$('.two-up').parent().parent().css({
		'margin' : 0
	});
	console.log('testTwoUp');
	$( ".two-up a" ).wrapInner( "<div class='btn-secondary'></div>");
}
function imageModule() {
	$('.image-module').each(function() {
		$(this).find('img').wrap( "<div class='image-container'></div>" );
	});

	$(".image-module img").each(function(){
	    var $this = $(this);
	    if ($this.width() > $this.height()) {
	        $this.parent().parent().addClass("horizontal");
	    }  else {
	        $this.parent().parent().addClass("vertical");	    	
	    }
	});
}

function couponCode() {
	$('.coupon-percent-text').clone().appendTo('.coupon-marquee-container #div1');
	$('.coupon-percent-text').clone().appendTo('.coupon-marquee-container #div1');
	$('.coupon-percent-text').clone().appendTo('.coupon-marquee-container #div2');
	$('.coupon-marquee-container').width($('#div1').width());
}
function testimonialBlock() {
	$( ".block.testimonial" ).wrapAll( "<div class='testimonial-container block' />");
	$('.block.testimonial').each(function() {
		if ($(this).find('p[data-section=bio]').length > 0) {
		} else {	
			$(this).find('.text p:nth-child(1)').attr('data-section','bio');
			$(this).find('.text p:nth-child(2)').attr('data-section','title');
			$(this).find('.text p:nth-child(3)').attr('data-section','class');				
			$(this).find('.text p:nth-child(4)').attr('data-section','testimonial');								
		}
		var $name = $(this).find('p:nth-child(1)').html();
		$name = $name.toString().split(',')[0];
		var $URL = convertToSlug($name);
		$(this).attr('id',$URL);
	});
}

function initSkrollr() {
	// $('.course-block.hero .video-container').attr('data-0-top-bottom', 'transform: translate3d(0,0%,0);');
	// $('.course-block.hero .video-container').attr('data-0-bottom-top', 'transform: translate3d(0,-100%,0);');

	$('.course-block.hero .videos').attr('data-0-top-bottom', 'transform: translate3d(0,50%,0);');
	$('.course-block.hero .videos').attr('data-0-bottom-top', 'transform: translate3d(0,0%,0);');

	$('.course-block.hero .value-props').attr('data-0-top-bottom', 'transform: translate3d(0,0%,0);');
	$('.course-block.hero .value-props').attr('data-0-bottom-top', 'transform: translate3d(0,30%,0);');

	$('.course-block.hero .value-props .learning-text-container').attr('data-0-top-bottom', 'transform: translate3d(0,10%,0);');
	$('.course-block.hero .value-props .learning-text-container').attr('data-0-bottom-top', 'transform: translate3d(0,0%,0);');

	$('.image-module.horizontal .text').attr('data-0-top-bottom', 'transform: translate3d(0,10%,0);');
	$('.image-module.horizontal .text').attr('data-0-bottom-top', 'transform: translate3d(0,0%,0);');

	$('.image-module.horizontal .image-container').attr('data-0-top-bottom', 'transform: translate3d(0,-10%,0);');
	$('.image-module.horizontal .image-container').attr('data-0-bottom-top', 'transform: translate3d(0,0%,0);');

	$('.instructor.block .pic').attr('data-0-top-bottom', 'transform: translate3d(0,-10%,0);');
	$('.instructor.block .pic').attr('data-0-bottom-top', 'transform: translate3d(0,0%,0);');

	$('.blog-listing article:nth-child(4n+1) .text').attr('data-0-top-bottom', 'transform: translate3d(0,-15%,0);');
	$('.blog-listing article:nth-child(4n+1) .text').attr('data-0-bottom-top', 'transform: translate3d(0,0%,0);');

	$('.blog-listing article:nth-child(4n+1) .img').attr('data-0-top-bottom', 'transform: translate3d(0,5%,0);');
	$('.blog-listing article:nth-child(4n+1) .img').attr('data-0-bottom-top', 'transform: translate3d(0,0%,0);');

	// $('.article-header-container .img').attr('data-0-top-bottom', 'transform: translate3d(0,0%,0);');
	// $('.article-header-container .img').attr('data-0-bottom-top', 'transform: translate3d(0,15%,0);');

	$('.article-header-container .text').attr('data-0-top-bottom', 'transform: translate3d(0,0em,0);');
	$('.article-header-container .text').attr('data-0-bottom-top', 'transform: translate3d(0,3em,0);');

	// $('.block').attr('data-0-top-bottom', 'transform: translate3d(0,0%,0);');
	// $('.block').attr('data-0-bottom-top', 'transform: translate3d(0,5%,0);');

	// initialize skrollr if the window width is large enough
	if ($(window).width() > 767) {
		skrollr.init({forceHeight: false});
	}
	// disable skrollr if the window is resized below 768px wide
	$(window).on('resize', function () {
		if ($(window).width() <= 767) {
		  skrollr.init().destroy(); // skrollr.init() returns the singleton created above
		}
	});
}

function courseHeader() {
	if ($('.course-block.hero').length > 0) {
		var $navHeight = $('nav.global').outerHeight();
		var $headerHeight = $('.course-block.hero .header').outerHeight();
		var $headerHeightInner = $('.course-block.hero .header').height();
		var $numberofCourses = $('.block.curriculum .fa-youtube-play').length;

		$('.course-block.hero .value-props h2 .number-of-videos').html($numberofCourses);

		$(window).on('scroll',function() {
			var $headerHeight = $('.course-block.hero .header').outerHeight();
			var $threshhold = $('.course-block.hero .value-props').offset().top + $('.course-block.hero .value-props').height(); 
			console.log($(window).scrollTop() + $headerHeight);
			if ($(window).scrollTop() + $headerHeight > $threshhold) {
				$('.course-block.hero .header').hide();
			} else {
				$('.course-block.hero .header').show();

			}
	 	});
		var $paddingBottom = $('.course-block.hero .video-container').height() / 2;
		$paddingBottom = $paddingBottom + 'px';
		// $('.course-block.hero .header').css({
		// 	'padding-bottom' : $paddingBottom
		// });
		// $('.course-block.hero .value-props').css({
		// 	'margin-top': '-' + $paddingBottom
		// })

		$('.course-block.hero .header').css({
			'padding-top':  $navHeight
		});

		$('.course-block.hero .spacer').css({
			'padding-top':  $headerHeightInner
		});

		$('.course-block.hero a').click(function(e) {
			e.preventDefault();
			var $link = $(this).attr('href');
			$("html, body").animate({ scrollTop: $($link).offset().top - 100}, 1000);
		});
	}
}

function pageHeader() {
	if ($('body').hasClass('standard-page')) {
		$('.page-description').insertBefore ('.page-header .directory');
	}
}

function alumniPage() {
	if ($('body').hasClass('alumni-page') || $('body').hasClass('alumni') ) {
		var $testimonialPicArray = [];
		var $testimonialNameArray = [];
		var $testimonialURLArray = [];
		var i = 0;
		$('.page-description').detach().insertAfter('.page-header .headline');

		$('.testimonial.block').each(function(){
			var $name = $(this).find('p:nth-child(1)').html();
			$name = $name.toString().split(',')[0];
			var $URL = convertToSlug($name);
			$name = getInitials($name);
			$name = $name.split('').join('.'); 
			var $pic = $(this).find('.profile-pic img').attr('src');
			$testimonialNameArray[i] = $name;
			$testimonialPicArray[i] = $pic;
			$testimonialURLArray[i] = $URL;
			i++;
		});

		$('.page-header').append('<div class="directory"><label>Directory</label><div class="max-container"><div class="row"></div></div></div>');

		for ($i = 0; $i< $testimonialNameArray.length; $i++) {
			var profilePic = '<div class="pic"><div class="circle-thumb"><span class="circles"><div class="circle-container"><div class="circle"></div></div><div class="circle-container"><div class="circle"></div></div><div class="circle-container"><div class="circle"></div></div></span><div class="profile-pic"><div class="picture-container"><div class="picture"><img src="' + $testimonialPicArray[$i] + '"/></div></div></div></div></div>';
			var string = '<div class="thumb">'+ '<a href="#' + $testimonialURLArray[$i] + '">' + profilePic + '<div class="description">' + $testimonialNameArray[$i] + '</div>' + '</a></div>';
			$('.page-header .directory .row').append(string);
		}
	}
}

function featuredCoursesBlock() {
	var $width = $('.block.featured-courses .page .sidebar').width();
	var $transformFirstChild;
	$('.all-courses footer#global .block.featured-courses').remove();

	$('.block.featured-courses').each(function() {
		var $this = $(this);
		var $counter = 0;
	    $this.find('.page').each(function(){
			var $transformValue = $width * $counter;
			var $newTransformVal = $(this).width() - $transformValue - $width;
			$(this).attr('transform-normal','-' + $transformValue);
			$(this).attr('transform-shifted', $newTransformVal);

			var $transformProperty= 'translate3d(-' + $transformValue + 'px,0,0)';
			$(this).css({
				'transform': $transformProperty,
				'-webkit-transform': $transformProperty,
				'-ms-transform' : $transformProperty		
			});
			$counter = $counter + 1;
			$transformFirstChild = $transformValue/2 + 'px';
	    });
	   	var $marginTopValue = $counter + 'em';
		$this.find('.course-page-container').css({
			'margin-top': $marginTopValue
		});
	});

	// $('.block.featured-courses .page').each(function() {
	// 	var $transformValue = $width * $counter;
	// 	var $newTransformVal = $(this).width() - $transformValue - $width;
	// 	$(this).attr('transform-normal','-' + $transformValue);
	// 	$(this).attr('transform-shifted', $newTransformVal);

	// 	var $transformProperty= 'translate3d(-' + $transformValue + 'px,0,0)';
	// 	$(this).css({
	// 		'transform': $transformProperty,
	// 		'-webkit-transform': $transformProperty,
	// 		'-ms-transform' : $transformProperty		
	// 	});
	// 	$counter = $counter + 1;

	// 	$transformFirstChild = $transformValue/2 + 'px';
	// });

	$('.block.featured-courses .page:nth-child(1)').addClass('active');

	$('.block.featured-courses .page').on('click', function(){
		if ($(this).hasClass('active') == false) {
			$('.mouse-tooltip.active').removeClass('active');	
			$('.block.featured-courses .page.active').removeClass('active');
			$(this).addClass('active');
			var $transformValue = $(this).attr('transform-normal');
			var $transformProperty = 'translate3d(' + $transformValue + 'px,0,0)';
			$(this).css({
				'transform': $transformProperty,
				'-webkit-transform': $transformProperty,
				'-ms-transform' : $transformProperty,
			});

			$('.page.active').nextAll().each(function() {
				var $transformValue = $(this).attr('transform-normal');
				var $transformProperty = 'translate3d(' + $transformValue + 'px,0,0)';
				$(this).css({
					'transform': $transformProperty,
					'-webkit-transform': $transformProperty,
					'-ms-transform' : $transformProperty
				});
			});

			$('.page.active').prevAll().each(function() {
				var $transformValue = $(this).attr('transform-shifted');
				var $transformProperty = 'translate3d(' + $transformValue + 'px,0,0)';
				$(this).css({
					'transform': $transformProperty,
					'-webkit-transform': $transformProperty,
					'-ms-transform' : $transformProperty
				});
			});
		}
	});

	$('.block.featured-courses .page').on('mouseenter',function(e){
		if ($(this).hasClass('active') == false) {
			var nthSelector = $(this).index() + 1;
			var toolTipSelector = '.mouse-tooltip:nth-child('+ nthSelector +')';
			if ($(toolTipSelector).hasClass('active') == false) {
				$(toolTipSelector).addClass('active');
			}
		}
	});

	$('.block.featured-courses .page').on('mouseleave',function(e){
		if ($(this).hasClass('active') == false) {
			var nthSelector = $(this).index() + 1;
			var toolTipSelector = '.mouse-tooltip:nth-child('+ nthSelector +')';
			$(toolTipSelector).removeClass('active');
		}
	});

	$('.block.featured-courses .page').mousemove(function(e){
		if ($(this).hasClass('active') == false) {
			var divPos = {};
			var nthSelector = $(this).index() + 1;
			var offset = $(this).offset();
			    divPos = {
			        left: e.pageX - offset.left + 10,
			        top: e.pageY - offset.top + 10
			    };

			var toolTipSelector = '.mouse-tooltip:nth-child('+ nthSelector +')';

			// $(toolTipSelector).addClass('current');
			$(toolTipSelector).css({
				top: divPos.top + offset.top,
				left: divPos.left + offset.left
			});
		} else {
			$('.mouse-tooltip.active').removeClass('active');	
		}
		// $(toolTipSelector).addClass('active');
	});

	$('.block.featured-courses .page').css({
		'margin-left' : $transformFirstChild
	});
}


function convertRichText() {
	$('.rich_text span').each(function() {
		var $content = $(this).html();
		if ($(this).css("font-size") == '30px'){
			$(this).unwrap();
			$(this).replaceWith('<blockquote>' + $content + '</blockquote>');
		} else if ($(this).css("font-size") == '28px') {
			$(this).unwrap();
			$(this).replaceWith('<h1>' + $content + '</h1>');
		} else if ($(this).css("font-size") == '24px') {
			$(this).unwrap();
			$(this).replaceWith('<h2>' + $content + '</h2>');
		} else if ($(this).css("font-size") == '20px') {
			$(this).unwrap();
			$(this).replaceWith('<h3>' + $content + '</h3>');
		} else if ($(this).css("font-size") == '12px') {
			$(this).unwrap();
			$(this).replaceWith('<label>' + $content + '</label>');
		}
	});

	$('.rich_text img').each(function() {
		if($(this).parent().hasClass('.rich-text-container') != false && $(this).parent().hasClass('.image-module') != false) {
			$(this).unwrap();
		}
	});

}

function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}

var animateLines = function() {

};

var getInitials = function (string) {
    var names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};