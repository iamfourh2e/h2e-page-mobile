import React from 'react';
import {
  AsyncStorage,
  Button,
  View,
  ActivityIndicator,
  StatusBar
} from 'react-native';

export default class Login extends React.Component {

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
    this.props.navigation.navigate('App');
  };
}

export class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    // const userToken = await AsyncStorage.getItem('userToken');
    const userToken = null;
    const routeName = userToken ? 'App' : 'Auth';
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