import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enLocale from './en.js';
import zhLocale from './zh.js';

Vue.use(VueI18n);

const messages = {
    en: {
        ...enLocale,
    },
    zh: {
        ...zhLocale,
    },
};

// 进入页面自动设置语言
export function getLanguage() {
    console.log("getLanguage")
    const chooseLanguage = localStorage.getItem('language');
    if (chooseLanguage) {
        // console.log("getLanguage " + this.$store)
        return chooseLanguage;
    }
    // 如果没有选择语言
    const language = (navigator.language).toLowerCase();
    const locales = Object.keys(messages);
    for (const locale of locales) {
        if (language.indexOf(locale) > -1) {
            return locale;
        }
    }
    return 'zh';
}

const i18n = new VueI18n({
    // 设置语言
    // options: en | zh
    locale: getLanguage(),
    // 设置语言信息
    messages,
});

export default i18n;
