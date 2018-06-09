import React, {Component} from 'react';
import {View, Text} from 'react-native';

const Props = {};

export default class Profile extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>Profile</Text>
      </View>
    );
  }
}
