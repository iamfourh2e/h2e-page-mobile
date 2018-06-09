import React from 'react';
import {observer, inject, Provider} from 'mobx-react';
import SplashScreen from 'react-native-splash-screen';
//config
import stores from './src/stores';
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

