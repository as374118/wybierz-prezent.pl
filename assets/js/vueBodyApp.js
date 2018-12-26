import plTransaltions from '../translations/pl.js';
import ruTransaltions from '../translations/ru.js';
import logger from './logger.js';

// Vue.filter('translate', function (value) {
//     return gettext(value);
// });

function getLang() {
    return localStorage.getItem("lang");
}

function setLang(lang) {
    localStorage.setItem("lang", lang);
    location.reload();
}

function gettext(text) {
    const lang = getLang();
    logger.debug("Getting translation for: " + text + " for lang: " + lang);
    switch (lang) {
        case "pl":
            return plTransaltions[text] || text;
        case "ru":
            return ruTransaltions[text] || text;
        case "en":
            return text;
        default:
            logger.err("Language is not supported " + lang);
            return text;
    }
}

let app = new Vue({
    el: '#main-container',
    data: {
    },
    filters: {
        translate: gettext
    }
});