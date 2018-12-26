$(document).ready(onDocumentLoaded);

function onDocumentLoaded() {
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

  // set default language if it was not set before
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "pl"); 
  }
}