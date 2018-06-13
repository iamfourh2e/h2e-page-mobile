import React from 'react';
import {Platform} from "react-native";
import {StackNavigator, SwitchNavigator} from "react-navigation";
import Drawer from "./Drawer";
import Screen from "./screens"
import {slideLeftToRightTransition} from "./libs";
import {Provider} from 'mobx-react';
import stores from "./stores";

const AuthStack = StackNavigator({Login: Screen.Login});
const AppStack = StackNavigator(
  {
    Drawer: {screen: Drawer},
    Tab2: {screen: Screen.Tab2},
    Home: {screen: Screen.Home},
    Detail: {screen: Screen.DetailPage}
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none',
    // mode: Platform.OS === 'ios' ? 'modal' : 'card',
    transitionConfig: () => (Platform.OS === 'ios' ? {} : slideLeftToRightTransition),
  }
);


const RootNavigator = SwitchNavigator(
  {
    AuthLoading: Screen.AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);


export default () => (
  <Provider stores={stores}>
    <RootNavigator/>
  </Provider>
);

