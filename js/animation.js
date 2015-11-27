$(document).ready(function() {

	$('body').on('click', '#about', function() {

	$('html, body').animate({
	      scrollTop: $(".hello-world").offset().top
	  }, 500);
	  return false;
	});
	
	$('body').on('click', '#links', function() {
	  $('html, body').animate({
	      scrollTop: $("#links-header").offset().top
	  }, 500);
	  return false;
	});	

	$('body').on('click', '#projects', function() {
	  $('html, body').animate({
	      scrollTop: $("#projects-header").offset().top
	  }, 500);
	  return false;
	});	

	$('body').on('click', '#contact', function() {
	  $('html, body').animate({
	      scrollTop: $("#contact-header").offset().top
	  }, 500);
	  return false;
	});	

	$('body').on('click', '#portfolio', function() {
	  $('html, body').animate({
	      scrollTop: $("#portfolio-header").offset().top
	  }, 500);
	  return false;
	});	

	$('body').on('mouseenter mouseleave', 'img.main-photo-1', function() {
	  $('img.main-photo-1').attr({
	    src: $(this).attr('data-photoone-src')
	    , 'data-photoone-src': $(this).attr('src'),
	  });
	});	

	$('body').on('mouseenter mouseleave', 'img.main-photo-2', function() {
	  $('img.main-photo-2').attr({
	    src: $(this).attr('data-phototwo-src')
	    , 'data-phototwo-src': $(this).attr('src')
	  });
	});
});

