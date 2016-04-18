jQuery( function($){

	/*----------------------/
	/* PAGE LOADER
	/*---------------------*/

	if( $('body.no-preloader').length <= 0 ) {
		$('body').jpreLoader({
			showSplash: false,
			loaderVPos: "50%"
		});
	}


	/*----------------------/
	/* MAIN NAVIGATION
	/*---------------------*/

	// navbar and logo switch related with scroll position
	$(window).on('scroll', function(){
		if( $(window).width() > 1024 ) {
			if( $(document).scrollTop() > 150 ) {
				setNavbarLight();
			}else {
				setNavbarTransparent();
			}
		}
	});

	// navbar and logo switch related with screen width
	function toggleNavbar() {
		if( ($(window).width() > 1024) && ($(document).scrollTop() <= 150) ) {
			setNavbarTransparent();
		} else {
			setNavbarLight();
		}
	}

	toggleNavbar();

	$(window).resize( function() {
		toggleNavbar();
	});

	/* navbar setting functions */
	function setNavbarLight() {
		$('.navbar').addClass('navbar-light');
		$('.navbar-brand img').attr('src', 'assets/logo/logo.png');
	}

	function setNavbarTransparent() {
		$('.navbar').removeClass('navbar-light');
		$('.navbar-brand img').attr('src', 'assets/logo/logo-negative.png');
	}

	// hide collapsible menu
	$('.navbar-nav li a').click( function() {
		if($(this).parents('.navbar-collapse.collapse').hasClass('in')) {
			$('#main-nav').collapse('hide');
		}
	});

	$('#main-nav').localScroll({
		duration: 1000,
		easing: 'easeInOutExpo'
	});

	$('.hero-buttons').localScroll({
		duration: 1000,
		easing: 'easeInOutExpo'
	});


	/*----------------------/
	/* HERO UNIT SUPERSIZED
	/*---------------------*/

	if( $('.slideshow').length > 0 ) {
		$.supersized({

			// Functionality
			autoplay: 1,				// Slideshow starts playing automatically
			slide_interval: 3000,		// Length between transitions
			transition: 1, 				// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
			transition_speed: 1000,		// Speed of transition

			// Components
			slide_links: 'blank',		// Individual links for each slide (Options: false, 'num', 'name', 'blank')
			thumb_links: 0,				// Individual thumb links for each slide
			slides:  	[				// Slideshow Images
							{image : 'assets/img/sliders/slider1.jpg', title : '<div class="hero-text"><h2 class="hero-heading">HANDCRAFTED</h2><p>Built to provide great visitor experience</p></div>', thumb : '', url : ''},
							{image : 'assets/img/sliders/slider2.jpg', title : '<div class="hero-text"><h2 class="hero-heading">PARALLAX</h2><p>Scrolling the page is fun with parallax background</p></div>', thumb : '', url : ''},
							{image : 'assets/img/sliders/slider3.jpg', title : '<div class="hero-text"><h2 class="hero-heading">BUY ONE FOR TWO</h2><p>Buy one to get both of the agency and personal theme</p></div>', thumb : '', url : ''}
						],
		});

		$(".fa-pause, .fa-play").click( function(){
			$(this).toggleClass("fa-pause fa-play");
		});
	}


	/*----------------------/
	/* PARALLAX
	/*---------------------*/

	// .parallax(xPosition, speedFactor, outerHeight) options:
	// xPosition - Horizontal position of the element
	// inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	// outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport

	$('.full-width-parallax').parallax(0, 0.1);

	function setParallax() {
		if( $(window).width() > 1024 ) {
			$('.full-width-parallax').parallax(0, 0.1);
			if( $('#testimonial').hasClass('parallax') ) {
				$('#testimonial').parallax(0, 0.1);
			}
		}
	}

	setParallax();

	$(window).resize( function() {
		setParallax();
	});


	/*----------------------/
	/* SKILLS
	/*---------------------*/

	$('#skills').waypoint( function() {
		$('.chart').each( function() {
			$(this).easyPieChart({
				size: 150,
				barColor: '#ffae3f',
				trackColor: '#eee',
				scaleColor: false,
				lineWidth: 2,
				easing: 'easeOutExpo',
				animate: 2000
			});
		});
	},
	{
		offset: '70%'
	});

	/*----------------------/
	/* SCROLL TO TOP
	/*---------------------*/

	if( $(window).width() > 992 ) {
		$(window).scroll( function() {
			if( $(this).scrollTop() > 300 ) {
				$('.back-to-top').fadeIn();
			} else {
				$('.back-to-top').fadeOut();
			}
		});

		$('.back-to-top').click( function(e) {
			e.preventDefault();

			$('body, html').animate({
				scrollTop: 0
			}, 800, 'easeInOutExpo');
		});
	}


	/*----------------------/
	/* WORKS
	/*---------------------*/

	var $container = $('.work-item-list');

	new imagesLoaded( $container, function() {
		$container.isotope({
			itemSelector: '.work-item'
		});
	});


	$('.work-item-filters a').click( function(e) {

		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector
		});

		$('.work-item-filters a').removeClass('active');
		$(this).addClass('active');

		return false;
	});

	var originalTitle, currentItem;

	$('.media-popup').magnificPopup({
		type: 'image',
		callbacks: {
			beforeOpen: function() {

				// modify item title to include description
				currentItem = $(this.items)[this.index];
				originalTitle = currentItem.title;
				currentItem.title = '<h3>' + originalTitle + '</h3>' + '<p>' + $(currentItem).parents('.work-item').find('img').attr('alt') + '</p>';

				// adding animation
				this.st.mainClass = 'mfp-fade';
			},
			close: function() {
				currentItem.title = originalTitle;
			}
		}

	});


	/*----------------------/
	/* SOCIAL NETWORK
	/*---------------------*/

	if( $(window).width() > 1024 ) {
		wow = new WOW({
			animateClass: 'animated'
		});

		wow.init();
	} else {
		$('.wow').attr('class', '');
	}


	/*----------------------/
	/* TOOLTIP
	/*---------------------*/

	if( $(window).width() > 1024 ) {
		$('body').tooltip({
			selector: "[data-toggle=tooltip]",
			container: "body"
		});
	}


	/*----------------------/
	/* AJAX CONTACT FORM
	/*---------------------*/

	$('#contact-form').parsley();

	$('.contact-form form').submit( function(e) {

		e.preventDefault();

		if( !$(this).parsley('isValid') )
			return;

		$theForm = $(this);
		$btn = $(this).find('#submit-button');
		$btnText = $btn.text();
		$alert = $(this).parent().find('.alert');

		$btn.find('.loading-icon').addClass('fa-spinner fa-spin ');
		$btn.prop('disabled', true).find('span').text("Sending...");

		$.ajax({
		    url: $theForm.attr('action'),
		    method: "POST",
		    data: $(this).serialize(),
		    dataType: "json"
		}).then(function(data){

			$message = data.message;

			if( data.result == true ){
				$theForm.slideUp('medium', function() {
					$alert.removeClass('alert-danger');
					$alert.addClass('alert-success').html($message).slideDown('medium');
				});
			}else {
				$alert.addClass('alert-danger').html($message).slideDown('medium');
			}

			$btn.find('.loading-icon').removeClass('fa-spinner fa-spin ');
			$btn.prop('disabled', false).find('span').text($btnText);

		})
		.fail(function() { console.log('AJAX Error'); });
	});


	// init scrollspy except on Opera, it doesn't work because body has 100% height
	if ( !navigator.userAgent.match("Opera/") ) {
		$('body').scrollspy({
			target: '#main-nav'
		});
	}else {
		$('#main-nav .nav li').removeClass('active');
	}

});
