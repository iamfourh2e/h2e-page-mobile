import React from 'react';
import {observer, inject, Provider} from 'mobx-react';
import SplashScreen from 'react-native-splash-screen';
import Meteor from 'react-native-meteor';
//config
import stores from './src/stores';

const SERVER = "ws://192.168.0.103:3000/websocket"; //fake server
//Component
import AppNavigator from "./src/index";

@inject("stores")
@observer
class App extends React.Component<{}> {
  constructor(props) {
    super(props);
    props.stores.locale.getLocale();
  }


  componentDidMount() {
    // METEOR
    Meteor.connect(SERVER);
    SplashScreen.hide();
  }

  render() {
    return <AppNavigator/>
  }
}

export default () =>
  <Provider stores={stores}>
    <App/>
  </Provider>

