import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {View, Text, Button} from 'react-native';
import RNRestart from 'react-native-restart';


import I18n from '../../configs/i18n';
import {Colors} from "../../constants";

const Props = {};

@inject('stores')
@observer
export default class Post extends Component<Props> {

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>{I18n.t('greeting')}</Text>
        <Button
          title={"KM"}
          onPress={() => {
            this.props.stores.locale.setLocale('km');
            RNRestart.Restart();
          }}
        />
        <Button
          title={"EN"}
          onPress={() => {
            this.props.stores.locale.setLocale('en');
            RNRestart.Restart();
          }}
        />


        <Text style={{color: Colors.black(), fontSize: 23, fontFamily: 'Cellcard-Medium'}}>
          អក្សរ តាម​ពាក្យ​សំស្ក្រឹត មាន​ន័យ​ថា ទន់​ភ្លន់​ អាច​បត់​បែន​បាន អាច​យក​ទៅ​ច្នៃ​បាន តាម​ការ​ផ្សំ​ជា​មួយ​ស្រៈ
          តាម​ការ​ប្រកប​ជា​មួយ​នឹង​ព្យញ្ជនៈ​មួយ​ទៀត ឬ​តាម​ការ​ផ្សំ​ជា​មួយ​ជើង​អក្សរ​ណា​មួយ ។
        </Text>
      </View>
    );
  }
}
