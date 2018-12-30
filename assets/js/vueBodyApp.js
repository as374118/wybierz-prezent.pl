import lang from './lang.js';

let app = new Vue({
    el: '#main-container',
    data: {
        showDetailPortalDescription: false,
        lang: lang.getLang() || lang.defaultLang,
    },
    methods: {
        getLang: lang.getLang,
    },
    filters: {
        translate: lang.getText
    }
});

export default app;