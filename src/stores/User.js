import {observable, computed, action} from 'mobx';
import {storage, user_storage} from "../configs/storage";
import {AsyncStorage} from "react-native";
import FP from '../libs/fp';
const fromNullAble = (x) => !!x ? FP.Right(x) : FP.Left(null);

class User {
  @observable users = [];

  @computed
  get countUser() {
    return this.users.length;
  }

  @action getUser = async () => {
    const value = await AsyncStorage.getItem(storage.getUserKey());
    return fromNullAble(value).fold(f => f, g => {
      const user = JSON.parse(g);
      this.users = [];
      this.users.push(user);
    });
  };

  @action addUser = async (obj) => {
    this.users = [];
    await AsyncStorage.setItem(storage.getUserKey(), JSON.stringify(obj));
    return this.users.push(obj);
  };

  @action removeUser = async () => {
    await AsyncStorage.removeItem(storage.getUserKey());
    return this.users = [];
  }
}

export default new User();
