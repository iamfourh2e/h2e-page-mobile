import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';


const Props = {};

export default class Profile extends Component<Props> {

  _signOutAsync = async () => {
    this.props.navigation.navigate({routeName: 'Auth', key: 'Auth'});
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>Profile</Text>
        <Button title="Sign out" onPress={this._signOutAsync}/>
      </View>
    );
  }
}
