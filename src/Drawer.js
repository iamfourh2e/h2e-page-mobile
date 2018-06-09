import React from 'react';
import {
  Animated,
  StyleSheet,
  View,
} from 'react-native';
import {DrawerNavigator, DrawerItems, SafeAreaView} from 'react-navigation';
import Feather from 'react-native-vector-icons/Feather';
//lib
import stores from './stores';
// constant
//components
import TabNav from './Tab';
import Screen from './screens';

const drawerItemStyles = {
  wb_drawerIconSize: 30,
  drawerIconSize: 23,
  labelStyle: {fontSize: 18, fontWeight: 'normal'},
  activeBackgroundColor: "rgba(255,255,255,0.1)",
  activeTintColor: "rgba(255,255,255,1)",
  inactiveTintColor: "rgba(255,255,255,0.62)"
};

/*DrawerContent*/
class DrawerContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#2589e9'}}>
        <DrawerItems
          {...this.props}
          iconContainerStyle={styles.icon}
          activeBackgroundColor={drawerItemStyles.activeBackgroundColor}
          activeTintColor={drawerItemStyles.activeTintColor}
          inactiveTintColor={drawerItemStyles.inactiveTintColor}
          labelStyle={drawerItemStyles.labelStyle}
        />
      </View>
    )
  }
}

/*Drawer Navigator*/
const configRoutes = {
  Root: {
    screen: TabNav,
    navigationOptions: {
      drawerLabel: 'ទំព័រដើម',
      drawerIcon: ({tintColor}) => (
        <Feather name="home" size={drawerItemStyles.drawerIconSize} color={tintColor}/>
      ),
    }
  },
  Home: {
    screen: Screen.Home,
    navigationOptions: {
      drawerLabel: 'ទំព័រដើម',
      drawerIcon: ({tintColor}) => (
        <Feather name="home" size={drawerItemStyles.drawerIconSize} color={tintColor}/>
      ),
    }
  },
};
export default Drawer = DrawerNavigator(
  configRoutes,
  {
    initialRouteName: 'Root',
    contentOptions: {
      activeTintColor: drawerItemStyles.activeTintColor,
    },
    contentComponent: props => <DrawerContent {...props} stores={stores}/>,
  }
);

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 16,
    width: 28,
    alignItems: 'center',
  }
});