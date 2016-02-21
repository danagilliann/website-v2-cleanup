$(document).ready(function() {
  $('.anim-description, .hello-world, p.about-description').css({"visibility": "hidden"});
  $('#links-header, .link-a').css({"visibility": "hidden"});
  $('#portfolio-header, .tumblrImg').css({"visibility": "hidden"});
  $('#projects-header, .proj-button').css({"visibility": "hidden"});

  /*
   * Window changes 
   * Have different height for different window.widths
   */
  $(window).scroll(function() { 
    var height = $(window).scrollTop();

    if (height > 200) {
      $('.anim-description, .hello-world, p.about-description').css({"visibility": "visible"}).addClass('animated fadeInUp');
    }

    if (height > 500) { 
      $('#links-header, .link-a').css({"visibility": "visible"}).addClass('animated fadeInUp');
    }

    if (height > 920) { 
      $('#portfolio-header, .tumblrImg').css({"visibility": "visible"}).addClass('animated fadeInUp');
    }

    if (height > 2220) { 
      $('#projects-header, .proj-button').css({"visibility": "visible"}).addClass('animated fadeInUp');
    }

  });

  /* Main button clicks */
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

  $('body').on('click', '#featTalks', function() {
    $('html, body').animate({
        scrollTop: $("#featTalks-header").offset().top
    }, 500);
    return false;
  }); 


  $('body').on('mouseenter mouseleave', 'img.main-photo-1', function() {
    $('img.main-photo-1').attr({
      src: $(this).attr('data-photoone-src'), 
      'data-photoone-src': $(this).attr('src')
    });
  });	
  
  $('body').on('mouseenter mouseleave', 'img.main-photo-2', function() {
    $('img.main-photo-2').attr({
      src: $(this).attr('data-phototwo-src'), 
      'data-phototwo-src': $(this).attr('src')
    });
  });
});
