//featured playlists carousel

$(document).ready(function(){

  $('.carousel-next').on('click', function(e) {

    let $leftPos = $('.carousel-array').scrollLeft();

      $('.carousel-array').animate({

        //scrollLeft: $leftPos + 320
        scrollLeft: $leftPos + Math.floor($(window).width()/2)+16

      } ,800);
  });

  $('.carousel-prev').on('click', function(e) {

    let $leftPos = $('.carousel-array').scrollLeft();

    $('.carousel-array').animate({

    //  scrollLeft: $leftPos - 320
    scrollLeft: $leftPos - Math.floor($(window).width()/2)-16

    } ,800);


  });

});
// confirm that javascript has loaded

$(document).ready(function() {


  // TOGGLE NAVIGATION LIST AND NAVIGATION TOGGLE
  // HIDE NAVBAR BRAND ON EXPANDED MENU
  $('#navToggle').on('click', function(e) {

    if ( $(this).hasClass('fa-bars')) {
      $('.navbar-brand-img').fadeOut();
      $('#navExpand').removeClass('hide-small').fadeIn();
      $(this).removeClass('fa-bars').addClass('fa-times');

    } else {
      $('#navExpand').fadeOut();
      $(this).removeClass('fa-times').addClass('fa-bars');
      $('.navbar-brand-img').fadeIn();
    }
  });

  //MINIMIZE NAVBAR BRAND IMAGE ON SCROLL
  $(window).on('scroll', function() {

        let scrollHeight = window.pageYOffset;
        let navbarBrand = $('.navbar-brand-img');
        if (scrollHeight >= 100) {
          navbarBrand.slideUp(300);
        } if (scrollHeight < 100) {
          navbarBrand.slideDown(300);
        }
  });

  // BACK BUTTON FUNCTION

  $('.back-button').on('click', function(e) {
    window.history.back();
  });


});
