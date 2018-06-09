import React from 'react';
import {View, Text} from 'react-native';
import {Colors, Fonts} from "../../constants";

export default class extends React.Component {
  render() {
    const {success, danger, warning, info, text, style} = this.props;
    const val = text || '0';
    const color = success ? Colors.success :
      danger ? Colors.danger :
        warning ? Colors.warning :
          info ? Colors.info : Colors.primary;

    return (
      <View style={{
        ...style,
        zIndex: 1,
        borderRadius: 15,
        backgroundColor: color,
        width: val.length === 1 ? 27 : val.length === 2 ? 30 : 34,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          color: Colors.white(),
          fontSize: 15,
          fontWeight: 'bold'
        }}>{val}</Text>
      </View>
    )
  }
}