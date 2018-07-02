import React from 'react';
import {AsyncStorage} from 'react-native';
import FP from '../libs/fp';
import _ from 'lodash';

class Storage {
  constructor() {
    this.user = '@p:user';
    this.locale = '@p:locale';
  }

  getUserKey() {
    return this.user
  };

  getLocaleKey() {
    return this.locale
  };

  clearStorage = () => {
    try {
      return AsyncStorage.clear();
    }
    catch (err) {
      console.warn(err);
    }
  };
  multiRemove = (keys) => {
    try {
      return AsyncStorage.multiRemove(keys, (err) => console.log(err));
    } catch (err) {
      console.warn(err);
    }
  };
  getAllKeys = () => {
    try {
      return AsyncStorage.getAllKeys((err, res) => console.log(res));
    } catch (err) {
      console.warn(err);
    }
  }
}

export const storage = new Storage();