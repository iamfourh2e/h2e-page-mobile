import React from 'react';
import {
  AsyncStorage,
  Button,
  View,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import {observer, inject} from 'mobx-react';
import stores from "../../stores";
import cinemaRoutes from "../../modules/cinema";
import Screen from "../index";

@inject('stores')
@observer
export default class Login extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Button title="Sign in!" onPress={this._signInAsync}/>
      </View>
    );
  }

  _signInAsync = () => {
    this.props.navigation.navigate({routeName: 'App', key: 'App'});
  };
}

@inject('stores')
@observer
export class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const user = null;
    const routeName = user ? 'App' : 'Auth';
    this.props.navigation.navigate({routeName: routeName, key: routeName});
  };

  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <ActivityIndicator/>
        <StatusBar barStyle="default"/>
      </View>
    );
  }
}