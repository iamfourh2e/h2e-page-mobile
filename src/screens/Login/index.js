import React from 'react';
import {
  AsyncStorage,
  Button,
  View,
  ActivityIndicator,
  NativeModules,
  StatusBar
} from 'react-native';
import {observer, inject} from 'mobx-react';
import stores from "../../stores";
import cinemaRoutes from "../../modules/cinema";
import Screen from "../index";

const ImagePicker = NativeModules.ImageCropPicker;

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

    // this.pickSingle(true)
  };

  pickSingle(cropit, circular=false) {
    ImagePicker.openPicker({
      width: 300,
      height: 200,
      freeStyleCropEnabled: false,
      cropperToolbarTitle: 'hello',
      cropping: cropit,
      cropperCircleOverlay: circular,
      compressImageMaxWidth: 640,
      compressImageMaxHeight: 480,
      compressImageQuality: 0.5,
      includeExif: true,
      cropperChooseText: 'choose',
      cropperCancelText: 'cancel'
    }).then(image => {
      console.log('received image', image);
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
        images: null
      });
    }).catch(e => {
      console.log(e);
      // Alert.alert(e.message ? e.message : e);
    });
  }

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