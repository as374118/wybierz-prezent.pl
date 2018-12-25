$(document).ready(function() {

  // Open menu
  $('.navbar-toggle').click(function() {
    $('.nav').toggleClass('open');
    $('body').toggleClass('fixed');
    $(this).toggleClass('active');
  });

  // Desire add class
  $('.desire-list li').click(function() {
    $('.desire-list li').removeClass('current');
    $(this).addClass('current');
  });

});