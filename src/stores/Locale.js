import {observable, computed, action} from 'mobx';
import {storage} from "../configs/storage";
import {AsyncStorage} from "react-native";
import I18n from '../configs/i18n';
import FP from '../libs/fp';

const fromNullAble = (x) => !!x ? FP.Right(x) : FP.Left(null);

const defaultLocale = 'en';

class Locale {
  @observable currentLocale = defaultLocale;

  @action getLocale = async () => {
    const value = await AsyncStorage.getItem(storage.getLocaleKey());
    return fromNullAble(value).fold(f => f, g => {
      I18n.locale = g;
      this.currentLocale = g;
    });
  };

  @action setLocale = async (locale) => {
    await AsyncStorage.setItem(storage.getLocaleKey(), locale);
    I18n.locale = locale;
    return this.currentLocale = locale;
  };

  @action removeLocale = async () => {
    await AsyncStorage.removeItem(storage.getLocaleKey());
    I18n.locale = defaultLocale;
    return this.currentLocale = defaultLocale;
  }
}

export default new Locale();
