import React from 'react';
import {
  Animated,
  StyleSheet,
  View,
  Text
} from 'react-native';
import {DrawerNavigator, DrawerItems, SafeAreaView} from 'react-navigation';
import Feather from 'react-native-vector-icons/Feather';
//lib
import {I18n, greeting} from './configs';
import stores from './stores';
// constant
import {Layout, Images, PJson, Colors, Fonts} from "./constants";
//components
import {TouchableItem, H2Eicon} from "./components";
import TabNav from './Tab';
import Screen from './screens';

const drawerItemStyles = {
  wb_drawerIconSize: 30,
  drawerIconSize: 23,
  labelStyle: {fontSize: 18, fontWeight: 'normal', fontFamily: Fonts.regular},
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
      <View style={{flex: 1, backgroundColor: Colors.midNight}}>
        <Animated.ScrollView
          style={{flex: 1}}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {contentOffset: {y: this.state.scrollY}},
              },
            ],
            {useNativeDriver: true}
          )}
        >
          <Animated.View
            style={[
              styles.backgroundUnderlay,
              {
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 120,
                marginBottom: -100
              },
              {
                transform: [
                  {scale: backgroundScale},
                  {translateY: backgroundTranslateY},
                ],
              },
            ]}
          >
            <Animated.Image
              source={Images.user}
              style={{width: 100, height: 100, opacity, transform: [{scale}, {translateY}]}}/>
            <Animated.Text
              style={[styles.userText, {opacity, transform: [{scale}, {translateY}]}]}>
              {greeting()} H2E
            </Animated.Text>
          </Animated.View>
          <Animated.View>
            <DrawerItems
              {...this.props}
              iconContainerStyle={styles.icon}
              activeBackgroundColor={drawerItemStyles.activeBackgroundColor}
              activeTintColor={drawerItemStyles.activeTintColor}
              inactiveTintColor={drawerItemStyles.inactiveTintColor}
              labelStyle={drawerItemStyles.labelStyle}
            />
            <ExtraDrawerItem
              onPress={() => null}
              iconContainerStyle={styles.icon}
              drawerLabel={I18n.t('logOut')}
              activeBackgroundColor={drawerItemStyles.activeBackgroundColor}
              activeTintColor={drawerItemStyles.activeTintColor}
              inactiveTintColor={drawerItemStyles.inactiveTintColor}
              labelStyle={drawerItemStyles.labelStyle}
              drawerIcon={({tintColor}) => (
                <Feather
                  name="log-out"
                  color={tintColor}
                  size={drawerItemStyles.drawerIconSize}
                />
              )}
            />
          </Animated.View>
          <Animated.View
            style={[styles.statusBarUnderlay,
              {opacity: underlayOpacity}
            ]}
          />
        </Animated.ScrollView>
        <SafeAreaView
          forceInset={{bottom: 'always'}}
          style={{height: 50, alignItems: 'center', justifyContent: 'center'}}>
          <H2Eicon name="h2e" size={20} color={Colors.white()}/>
          <Text style={{
            color: '#fff',
            fontFamily: Fonts.regular,
            fontSize: 12,
          }}>រក្សាសិទ្ធដោយ H2E TECH, ជំនាន់: {PJson.version}</Text>
        </SafeAreaView>
      </View>
    )
  }
}


const ExtraDrawerItem = (props) => {
  const color = props.focused ? props.activeTintColor : props.inactiveTintColor;
  const backgroundColor = props.focused
    ? props.activeBackgroundColor
    : props.inactiveBackgroundColor;
  return (
    <TouchableItem
      key={props.drawerLabel}
      onPress={() => props.onPress()}
      delayPressIn={0}
    >
      <SafeAreaView
        style={{backgroundColor}}
        forceInset={{
          [props.drawerPosition]: 'always',
          [props.drawerPosition === 'left' ? 'right' : 'left']: 'never',
          vertical: 'never',
        }}
      >
        <View style={[styles.item]}>
          <View
            style={[
              styles.icon,
              props.focused ? null : styles.inactiveIcon,
              props.iconContainerStyle,
            ]}
          >
            {props.drawerIcon({tintColor: color})}
          </View>
          <Text style={[styles.label, {color}, props.labelStyle, props.extraLabelStyle]}>
            {props.drawerLabel}
          </Text>
        </View>
      </SafeAreaView>
    </TouchableItem>
  );
};

/*Drawer Navigator*/
const configRoutes = {
  Root: {
    screen: TabNav,
    navigationOptions: {
      drawerLabel: () => I18n.t('home'),
      drawerIcon: ({tintColor}) => (
        <Feather name="home" size={drawerItemStyles.drawerIconSize} color={tintColor}/>
      ),
    }
  },
  Profile: {
    screen: Screen.Profile,
    navigationOptions: {
      drawerLabel: () => I18n.t('profile'),
      drawerIcon: ({tintColor}) => (
        <Feather name="user" size={drawerItemStyles.drawerIconSize} color={tintColor}/>
      ),
    }
  }
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
    fontFamily: Fonts.regular
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
    fontFamily: Fonts.regular
  }
});