import lang from './lang.js';
import statisticsLinks from './statisticsLinks.js';

let app = new Vue({
    el: '#main-container',
    data: {
        showDetailPortalDescription: false,
        lang: lang.getLang() || lang.defaultLang,
        statisticsLinks: statisticsLinks
    },
    methods: {
        getLang: lang.getLang,
    },
    filters: {
        translate: lang.getText
    }
});

export default app;