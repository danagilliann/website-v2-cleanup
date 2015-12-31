$(document).ready(function() {
  /*
   * Window changes 
   * Have different height for different window.widths
   */
  $(window).scroll(function() { 
    var height = $(window).scrollTop();

    if (height > 200) {
      $('.anim-description').addClass('animated fadeInUp');
      $('.hello-world').addClass('animated fadeInUp');
      $('p.about-description').addClass('animated fadeInUp');
    }

    if (height > 500) { 
      $('#links-header').addClass('animated fadeInUp');
      $('.link-a').addClass('animated fadeInUp');
    }

    if (height > 900) { 
      $('#portfolio-header').addClass('animated fadeInUp');
      $('.tumblrImg').addClass('animated fadeInUp');
    }

    if (height > 2210) { 
      $('#projects-header').addClass('animated fadeInUp');
      $('.proj-button').addClass('animated fadeInUp');
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
