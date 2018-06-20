import React from 'react';
import TabNavigator from './components/CustomTabBar/TabNavigator';
import Feather from 'react-native-vector-icons/Feather';

import {I18n} from './configs';
//Screen

import Screen from './screens';

const tabStyles = {
  iconSize: 23,
};

export default TabNav = TabNavigator(
  {
    MainHomeTab: {
      screen: Screen.Home,
      navigationOptions: {
        title: 'Home',
        tabBarLabel: () => I18n.t('home'),
        tabBarIcon: ({tintColor, focused}) => (
          <Feather
            name={focused ? 'home' : 'home'}
            size={tabStyles.iconSize}
            style={{color: tintColor}}
          />
        ),
      },
    },
    MainProfileTab: {
      screen: Screen.Profile,
      navigationOptions: {
        title: 'Profile',
        tabBarLabel: () => I18n.t('profile'),
        tabBarIcon: ({tintColor, focused}) => (
          <Feather
            name={focused ? 'user' : 'user'}
            size={tabStyles.iconSize}
            style={{color: tintColor}}
          />
        ),
      },
    },
    MainPagesTab: {
      screen: Screen.Pages,
      navigationOptions: {
        title: 'Pages',
        tabBarLabel: () => I18n.t('page'),
        tabBarIcon: ({tintColor, focused}) => (
          <Feather
            name={focused ? 'flag' : 'flag'}
            size={tabStyles.iconSize}
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
