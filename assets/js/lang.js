import plTransaltions from '../translations/pl.js';
import ruTransaltions from '../translations/ru.js';
import enTranslations from '../translations/en.js';
import logger from './logger.js';

let langModule = {};

langModule.defaultLang = "pl";

langModule.getLang = function () {
    return localStorage.getItem("lang");
};

langModule.setLang = function (lang) {
    localStorage.setItem("lang", lang);
};

langModule.getText = function (text) {
    const lang = langModule.getLang();
    logger.debug("Getting '" + lang + "' translation for the text:  " + text);
    switch (lang) {
        case "pl":
            return plTransaltions[text] || text;
        case "ru":
            return ruTransaltions[text] || text;
        case "en":
            return enTranslations[text] || text;
        default:
            logger.err("Language is not supported " + lang);
            return text;
    }
};

export default langModule;
