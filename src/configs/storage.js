import React from 'react';
import {AsyncStorage} from 'react-native';
import FP from '../libs/fp';
import _ from 'lodash';

class Storage {
  constructor() {
    this.user = '@wba:user';
  }

  getUserKey() {
    return this.user
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