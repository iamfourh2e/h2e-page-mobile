import React from 'react';
import {ScrollView, StatusBar, Button, Platform} from 'react-native';
import {
  SafeAreaView,
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import {slideLeftToRightTransition} from "../libs/navigationTransition";

import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "./Home";
import Post from "./Post";

const TabNav = TabNavigator(
  {
    HomeTab: {
      screen: Home,
      path: '/',
      navigationOptions: {
        title: 'Home',
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
    PostTab: {
      screen: Post,
      path: '/post',
      navigationOptions: {
        title: 'Post',
        tabBarLabel: 'Post',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={focused ? 'ios-create' : 'ios-create-outline'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
  },
  {
    ...TabNavigator.Presets.iOSBottomTabs,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);

const Tab2 = StackNavigator(
  {
    Root: {
      screen: TabNav,
    }
  },
  {
    initialRouteName: 'Root',
    headerMode: 'none',
    // mode: Platform.OS === 'ios' ? 'modal' : 'card',
    transitionConfig: () => (Platform.OS === 'ios' ? {} : slideLeftToRightTransition),
  });

export default Tab2;
