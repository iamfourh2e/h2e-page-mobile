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
import {Layout, Fonts, PJson, Images} from '../src/constants';
//components
import Screen from './screens';

const drawerItemStyles = {
  wb_drawerIconSize: 30,
  drawerIconSize: 23,
  labelStyle: {fontSize: 18, fontFamily: Fonts.battambang, fontWeight: 'normal'},
  activeBackgroundColor: "rgba(255,255,255,0.1)",
  activeTintColor: "rgba(255,255,255,1)",
  inactiveTintColor: "rgba(255,255,255,0.62)"
};

/*DrawerContent*/
class DrawerContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0)
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const scale = this.state.scrollY.interpolate({
      inputRange: [-450, 0, 100],
      outputRange: [2, 1, 0.8],
      extrapolate: 'clamp',
    });
    const translateY = this.state.scrollY.interpolate({
      inputRange: [-450, 0, 100],
      outputRange: [-150, 0, 40],
    });
    const opacity = this.state.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    const underlayOpacity = this.state.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    const backgroundScale = this.state.scrollY.interpolate({
      inputRange: [-450, 0],
      outputRange: [3, 1],
      extrapolate: 'clamp',
    });
    const backgroundTranslateY = this.state.scrollY.interpolate({
      inputRange: [-450, 0],
      outputRange: [0, 0],
    });
    return (
      <View style={{flex: 1, backgroundColor: 'gray'}}>
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

const styles = StyleSheet.create({
  statusBarUnderlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Layout.statusbarHeight
  },
  backgroundUnderlay: {
    top: -100,
    height: 300,
    left: 0,
    right: 0,
  },
  bannerContainer: {
    alignItems: 'center',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: '200',
    color: '#fff',
    marginVertical: 8,
    marginRight: 5,
  },
  userText: {
    color: '#fff',
    top: 15,
    fontSize: 20,
    fontFamily: Fonts.battambangBold
  },
  logoutButton: {
    flex: 1,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 25
  },

  /*extra drawer item style*/
  container: {
    paddingVertical: 4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 16,
    width: 28,
    alignItems: 'center',
  },
  inactiveIcon: {
    opacity: 0.62,
  },
  label: {
    margin: 16,
    fontWeight: 'bold',
  }
});

/*Drawer Navigator*/
const configRoutes = {
  Home: {
    screen: Screen.Home,
    navigationOptions: {
      drawerLabel: 'ទំព័រដើម',
      drawerIcon: ({tintColor}) => (
        <Feather name="home" size={drawerItemStyles.drawerIconSize} color={tintColor}/>
      ),
    }
  }
};
export default Drawer = DrawerNavigator(
  configRoutes,
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: drawerItemStyles.activeTintColor,
    },
    contentComponent: props => <DrawerContent {...props} stores={stores}/>,
  }
);

