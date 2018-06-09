import Toast from 'react-native-toast-native';
import I18n from "../configs/i18n";
import {ToastStyles} from "../constants";

export default (i18nMsg, type) => Toast.show(I18n.t(i18nMsg), Toast.SHORT, Toast.BOTTOM, ToastStyles(type));
