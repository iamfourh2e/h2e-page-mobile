import React from 'react';
// import {TabNavigator} from 'react-navigation';
import TabNavigator from './components/CustomTabBar/TabNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';

import I18n from './configs/i18n';
//Screen
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Post from "./screens/Post";
import Message from "./screens/Message";
import Test from "./screens/Test";

export default TabNav = TabNavigator(
  {
    HomeTab: {
      screen: Home,
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
      screen: Post,
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
      screen: Message,
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
      screen: Profile,
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
      screen: Test,
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
