import React from 'react';
import {Platform} from "react-native";
import {StackNavigator, SwitchNavigator} from "react-navigation";
import {Provider} from 'mobx-react';
//screen
import TabNav from './Tab';
import Drawer from "./Drawer";
import Screen from "./screens"
import {slideLeftToRightTransition} from "./libs";
import stores from "./stores";
//routes
import cinemaRoutes from './modules/cinema'

const AppStack = StackNavigator(
  {
    Index: TabNav,
    ...cinemaRoutes,
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',
    // mode: Platform.OS === 'ios' ? 'modal' : 'card',
    transitionConfig: () => (Platform.OS === 'ios' ? {} : slideLeftToRightTransition),
  }
);

const AuthStack = StackNavigator(
  {Login: Screen.Login},
  {
    headerMode: 'none',
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

