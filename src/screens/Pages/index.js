import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

const Props = {};

export default class Pages extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>Pages</Text>
        <Button title={"Cinema"} onPress={() => {
          this.props.navigation.navigate({routeName: 'Cinema_Home', key: 'Cinema_Home'});
        }}/>
      </View>
    );
  }
}
