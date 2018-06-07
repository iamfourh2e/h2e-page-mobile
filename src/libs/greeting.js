import {format} from 'date-fns';

export const greeting = () => {
  let currentTime = +format(new Date(), 'HH');

  return currentTime <= 11 ? "អរុណសួស្តី!" :
    currentTime <= 16 ? "ទិវាសួស្ដី!" :
      currentTime <= 20 ? "សាយ័ណ្ហសួស្ដី!" : "រាត្រីសួស្តី!";
};