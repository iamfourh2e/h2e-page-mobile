import {observable, computed, action} from 'mobx';
import {storage} from "../configs/storage";
import {AsyncStorage} from "react-native";
import FP from '../libs/fp';
const fromNullAble = (x) => !!x ? FP.Right(x) : FP.Left(null);

class User {
  @observable user = {
    name: 'h2e',
    module: 'Cinema',
    token: ''
  };

  @action getUser = async () => {
    const value = await AsyncStorage.getItem(storage.getUserKey());
    return fromNullAble(value).fold(f => f, g => {
      this.user = JSON.parse(g);
    });
  };

  @action addUser = async (obj) => {
    this.user = {};
    await AsyncStorage.setItem(storage.getUserKey(), JSON.stringify(obj));
    return this.user = obj;
  };

  @action removeUser = async () => {
    await AsyncStorage.removeItem(storage.getUserKey());
    return this.user = {};
  }
}

export default new User();
