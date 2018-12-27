import logger from './logger.js';
import lang from './lang.js';
import vueBodyApp from './vueBodyApp.js';

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

  initLanguageSelection();
}

function initLanguageSelection() {
    // set default language if it was not set before
    if (!lang.getLang()) {
      lang.setLang(vueBodyApp.lang);
    }
  
    // onchange hook for selector
    $('#lang-selector').change(function () {
      const language = $(this).val();
      logger.debug('Language selected: ' + language);
      lang.setLang(language);

      // rerender all text translations
      vueBodyApp.$forceUpdate();
    });
}