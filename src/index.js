import React from 'react';
import {Platform} from "react-native";
import {StackNavigator} from "react-navigation";
import Drawer from "./Drawer";
import Screen from "./screens"
import {slideLeftToRightTransition, slideBottomToTopTransition} from "./libs/navigationTransition";
import {Provider} from 'mobx-react';
import stores from "./stores";

const AppNavigator = StackNavigator(
  {
    Root: {screen: Drawer},
    Tab2: {screen: Screen.Tab2},
    Home: {screen: Screen.Home},
  },
  {
    initialRouteName: 'Root',
    headerMode: 'none',
    // mode: Platform.OS === 'ios' ? 'modal' : 'card',
    transitionConfig: () => (Platform.OS === 'ios' ? {} : slideLeftToRightTransition),
  }
);

export default () => (
  <Provider stores={stores}>
    <AppNavigator/>
  </Provider>
);

