import I18n from 'react-native-i18n';
import en from './locales/en';
import km from './locales/km';

I18n.fallbacks = true;
I18n.defaultLocale = "en";
// I18n.locale = "km";

I18n.translations = {
  en,
  km
};

export default I18n;