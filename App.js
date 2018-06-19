import React from 'react';
import {observer, inject, Provider} from 'mobx-react';
import SplashScreen from 'react-native-splash-screen';
import Meteor from 'react-native-meteor';
//config
import stores from './src/stores';


const SERVER = "ws://192.168.0.103:3000/websocket"; //fake server

import {registerKilledListener, registerAppListener} from "./src/configs/fcm/Listeners";

registerKilledListener();
//Component
import RootNavigator from "./src/index";
import FCM from "react-native-fcm";
import {Platform} from "react-native";

@inject("stores")
@observer
class App extends React.Component<{}> {
  constructor(props) {
    super(props);
    props.stores.locale.getLocale();
  }


  async componentDidMount() {
    // METEOR
    registerAppListener(this.props.navigation);
    Meteor.connect(SERVER);
    FCM.getInitialNotification().then(notif => {
      console.log('init notif = ', notif);

      if (notif && notif.targetScreen === "detail") {
        setTimeout(() => {
          this.props.navigation.navigate("Detail");
        }, 500);
      }
    });

    try {
      let result = await
      FCM.requestPermissions({
        badge: false,
        sound: true,
        alert: true
      });
    } catch (e) {
      console.error(e);
    }

    FCM.getFCMToken().then(token => {
      console.log("TOKEN (getFCMToken)", token);
      this.setState({token: token || ""});
    });

    if (Platform.OS === "ios") {
      FCM.getAPNSToken().then(token => {
        console.log("APNS TOKEN (getFCMToken)", token);
      });
    }
    SplashScreen.hide();
  }

  render() {
    return <RootNavigator/>
  }
}

export default () =>
  <Provider stores={stores}>
    <App/>
  </Provider>

