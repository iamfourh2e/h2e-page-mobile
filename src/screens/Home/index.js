import React, {Component} from 'react';
import {TouchableOpacity, Text, TextInput, View, Button} from 'react-native';
import I18n from '../../configs/i18n';
import Toast from '../../libs/toast';
import AppBar from "../../components/AppBar";
import {Colors, ToastStyles} from "../../constants";
import AlertModal from "../../components/AlertModal";
import ActionSheetModal from "../../components/ActionSheetModal";

const Props = {};


export default class Home extends Component<Props> {

  showActionSheetModal = () => {
    const context = {
      title: "សូមអភ័យទោស",
      message: 'ម៉ាស៊ីនបោះពុម្ព ម៉ាស៊ីនបោះពុម្ព',
      headerBackgroundColor: Colors.success,
      headerColor: Colors.white(),
      buttons: [
        {
          text: "យល់ព្រម", onPress: fn => {
            return fn()
          }
        },
        {
          text: "យល់ព្រម", onPress: fn => {
            return fn()
          }
        },
        {
          text: "យល់ព្រម", onPress: fn => {
            return fn()
          }
        }, {
          text: "យល់ព្រម", onPress: fn => {
            return fn()
          }
        }, {
          text: "យល់ព្រម", onPress: fn => {
            return fn()
          }
        }, {
          text: "យល់ព្រម", onPress: fn => {
            return fn()
          }
        }, {
          text: "យល់ព្រម", onPress: fn => {
            return fn()
          }
        },
      ]
    };
    this.refs.actionSheetModal.show(context);
  };

  showAlertModal = () => {
    const context = {
      title: "សូមអភ័យទោស",
      message: 'ម៉ាស៊ីនបោះពុម្ព ម៉ាស៊ីនបោះពុម្ព',
      headerBackgroundColor: Colors.success,
      headerColor: Colors.white(),
      buttons: [
        {
          text: "យល់ព្រម", onPress: fn => {
            return fn()
          }
        },
        {
          text: "យល់ព្រម", onPress: fn => {
            return fn()
          }
        },

      ]
    };
    this.refs.alertModal.alert(context);

  };

  render() {
    return (
      <View style={{flex: 1}}>
        <AppBar
          hasAnimation={true}
          headerBackgroundColor={Colors.success}
          hasLargeTitle={true}
          statusbarStyle="light-content"
          useAppBarNavigation={true}
          isRefreshControlEnabled={true}
          navigation={this.props.navigation}
          headerTitle="ទំនាក់ទំនង"
          headerColor={Colors.white()}
          headerLeftText="ក្រោយ"
        >
          <Text>Home</Text>

          <Button title={"Toast"}
                  onPress={() => {
                    Toast('success', 'success');
                  }}
          />
          <Button title={"AlertModal"}
                  onPress={() => this.showAlertModal()}
          />
          <Button title={"Action Sheet"}
                  onPress={() => this.showActionSheetModal()}
          />
          <TextInput style={{height: 60, width: 200}}/>
        </AppBar>
        <AlertModal ref={"alertModal"}/>
        <ActionSheetModal ref={"actionSheetModal"}/>
      </View>
    );
  }
}
