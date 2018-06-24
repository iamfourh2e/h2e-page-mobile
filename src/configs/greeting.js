import {format} from 'date-fns';
import I18n from './i18n';

export default greeting = () => {
  let currentTime = +format(new Date(), 'HH');

  return currentTime <= 11 ? I18n.t('goodMorning') :
    currentTime <= 16 ? I18n.t('goodAfternoon') :
      currentTime <= 20 ? I18n.t('goodEvening') : I18n.t('goodNight');
};