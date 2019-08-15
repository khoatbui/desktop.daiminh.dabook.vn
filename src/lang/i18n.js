import Vue from 'vue';
import VueI18n from 'vue-i18n';
import viMessage from './vi.json';
import enMessage from './en.json';
import koMessage from './ko.json';

Vue.use(VueI18n);

const messages = {
  vi: viMessage,
  en: enMessage,
  ko: koMessage,
};

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages,
  fallbackLocale: 'en',
});

export default i18n;
