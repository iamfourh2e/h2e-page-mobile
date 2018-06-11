import React from 'react';
// import {TabNavigator} from 'react-navigation';
import TabNavigator from './components/CustomTabBar/TabNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {I18n} from './configs';
//Screen

import Screen from './screens';

export default TabNav = TabNavigator(
  {
    HomeTab: {
      screen: Screen.Home,
      navigationOptions: {
        title: 'Home',
        tabBarLabel: () => I18n.t('home'),
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
      screen: Screen.Post,
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
    MessageTab: {
      screen: Screen.Message,
      navigationOptions: {
        title: 'Message',
        tabBarLabel: 'Message',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
    ProfileTab: {
      screen: Screen.Profile,
      navigationOptions: {
        title: 'Profile',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={focused ? 'ios-person' : 'ios-person-outline'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
    TestTab: {
      screen: Screen.Test,
      navigationOptions: {
        title: 'Test',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={focused ? 'ios-bug' : 'ios-bug-outline'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
  },
  {
    ...TabNavigator.Presets.iOSBottomTabs,
    tabBarOptions: {
      showLabel: true,
    },
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);
