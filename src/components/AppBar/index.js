import React from 'react';
import PropTypes from 'prop-types'
import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  StatusBar,
  Easing,
  Platform,
  TextInput,
  ImageBackground,
  RefreshControl, BackHandler
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationActions, SafeAreaView, withNavigation} from 'react-navigation';
import {Layout, FontSizes, Fonts, Colors} from '../../constants';
import {styles} from './styles.js';

const platform = Platform.OS;

export default class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
      headerTitle: props.headerTitle || 'headerTitle',
      currentOffsetY: new Animated.Value(0),
    };
    this.animatedValue = new Animated.Value(0);
    this.containerMarginTop = new Animated.Value(Layout.window.height)
  }

  componentWillMount() {
    const {navigation, useAppBarNavigation} = this.props;
    if (useAppBarNavigation) {
      if (Platform.OS !== 'android') return;
      BackHandler.addEventListener('hardwareBackPress', () => {
        return navigation.goBack(null);
      });
    }
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 500,
        easing: Easing.bezier(0.81, .53, .66, .99)
      }),
      Animated.spring(this.containerMarginTop, {
        toValue: 0
      })
    ]).start()
  }

  componentWillUnmount() {
    const {useAppBarNavigation} = this.props;
    if (useAppBarNavigation) {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }

  render() {
    const translateY = this.state.scrollY.interpolate({
      // inputRange: [0, Layout.largeTopBarHeight],
      // outputRange: [0, -(Layout.appBarHeight + 10)],
      // extrapolate: 'clamp'

      inputRange: [0, 100],
      outputRange: [0, -(Layout.header - Layout.appBarHeight)],
      extrapolate: 'clamp'
    });
    const marginTop = this.state.scrollY.interpolate({
      inputRange: [0, Layout.largeTopBarHeight],
      outputRange: [0, -(Layout.appBarHeight + 10)],
      extrapolate: 'clamp'
    });
    const scale = this.state.scrollY.interpolate({
      inputRange: [0, Layout.largeTopBarHeight],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });
    const opacity = this.state.scrollY.interpolate({
      inputRange: [0, Layout.largeTopBarHeight],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });
    const largeTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, Layout.largeTopBarHeight],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });
    const appBarTitleCenter = this.state.scrollY.interpolate({
      inputRange: [0, Layout.header - Layout.appBarHeight],
      outputRange: [-10, 0],
      extrapolate: 'clamp'
    });
    const appBarTitleCenterMarginTop = this.state.scrollY.interpolate({
      inputRange: [0, Layout.appBarHeight],
      outputRange: [-100, 0],
      extrapolate: 'clamp'
    });
    const animatedStyle = {
      marginTop: this.containerMarginTop
    };

    const contentPlaceHolder = this.props.hasLargeTitle && this.props.hasSearchBar ?
      Layout.appBarHeight + Layout.searchBarHeight :
      this.props.hasLargeTitle ? Layout.appBarHeight + 10 :
        this.props.hasSearchBar ? Layout.appBarHeight + 10 : null;
    const headerSize = this.props.hasLargeTitle && this.props.hasSearchBar ? styles.header :
      this.props.hasLargeTitle ? styles.headerWithLargeTitle :
        this.props.hasSearchBar ? styles.headerWithSearchBar : null;

    const headerBackgroundColor = this.props.headerBackgroundColor ?
      {backgroundColor: this.props.headerBackgroundColor} : {backgroundColor: 'transparent'};
    const searchBarBackgroundColor = this.props.searchBarBackgroundColor ?
      {backgroundColor: this.props.searchBarBackgroundColor} : {backgroundColor: 'transparent'};

    return (
      <Animated.View style={[styles.container,
        this.props.hasAnimation ?
          animatedStyle : null
      ]}>
        <View style={[styles.statusBar, headerBackgroundColor]}/>
        <StatusBar
          barStyle={this.props.statusbarStyle || "light-content"}
          animated
          showHideTransition={'fade'}
          translucent={true} backgroundColor="rgba(0, 0, 0, 0.3)"
        />
        {
          this.props.headerLeftText
            ?
            <HeaderBar
              headerLeftText={this.props.headerLeftText}
              onPress={this.props.onHeaderPress}
              scale={scale}
              opacity={opacity}
              appBarTitleCenterMarginTop={appBarTitleCenterMarginTop}
              headerTitle={this.state.headerTitle}
              hasLargeTitle={this.props.hasLargeTitle}
              headerBackgroundColor={headerBackgroundColor}
              headerColor={this.props.headerColor}
              renderHeaderRightButtons={this.props.renderHeaderRightButtons}
            />
            :
            <View style={[headerBackgroundColor, {height: 0}]}/>
        }
        <Animated.View style={[
          headerSize,
          {
            transform: [{translateY}],
          }
        ]}>
          {
            this.props.hasLargeTitle ?
              <LargeTitle
                headerTitle={this.state.headerTitle}
                headerBackgroundColor={headerBackgroundColor}
                headerColor={this.props.headerColor}
                height={Layout.largeTopBarHeight}
                opacity={largeTitleOpacity}
              />
              : null
          }
          {
            this.props.hasSearchBar ?
              <SearchBar headerBackgroundColor={headerBackgroundColor}
                         searchBarBackgroundColor={searchBarBackgroundColor}
                         searchBarPlaceholderTextColor={this.props.searchBarPlaceholderTextColor}
                         opacity={largeTitleOpacity}
              />
              : null
          }
        </Animated.View>
        <Animated.ScrollView
          contentContainerStyle={{
            paddingTop: platform === 'ios' ? contentPlaceHolder + 20 : contentPlaceHolder + 10,
          }}
          style={{flex: 1}}
          scrollEventThrottle={16}
          onScroll={
            Animated.event(
              [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
            )
          }
          refreshControl={
            <RefreshControl
              colors={[Colors.primary, Colors.danger, Colors.success, Colors.warning]}
              tintColor={Colors.white()}
              refreshing={this.props.refreshing || false}
              onRefresh={this.props.onRefresh}
              progressViewOffset={30}
              enabled={this.props.isRefreshControlEnabled}
            />
          }
        >
          <SafeAreaView forceInset={{bottom: 'always'}}>
            {this.props.children}
          </SafeAreaView>
        </Animated.ScrollView>
        {/* </ImageBackground> */}
      </Animated.View>
    );
  }
}


export class HeaderBar extends React.PureComponent {
  render() {
    const {
      opacity,
      headerTitle,
      hasLargeTitle,
      onPress,
      headerBackgroundColor,
      headerColor,
      headerLeftText,
      renderHeaderRightButtons
    } = this.props;
    return (
      <View
        style={[styles.headerBar, headerBackgroundColor, {zIndex: 1}]}>
        <BackButtonWithNavigation
          onPress={onPress}
          headerLeftText={headerLeftText}
          headerColor={headerColor}
        />
        <Animated.View style={[styles.appBarTitleCenter]}>
          <Animated.Text style={
            {
              fontSize: FontSizes.smallTitle,
              opacity: hasLargeTitle ? opacity : 1,
              fontFamily: Fonts.bold,
              color: headerColor
            }
          }>
            {headerTitle}
          </Animated.Text>
        </Animated.View>
        <View style={{flex: 1.5, flexDirection: 'row'}}>
          <View style={styles.appBarIconRight}>
            {renderHeaderRightButtons}
          </View>
        </View>
      </View>
    )
  }
}

export class BackButton extends React.PureComponent {
  render() {
    const {headerColor, onPress, headerLeftText} = this.props;
    return (
      <TouchableOpacity style={{flex: 1.5}} onPress={() =>
        onPress ?
          onPress() :
          this.props.navigation.goBack(null)
      }>
        <View style={{flex: 2, flexDirection: 'row'}}>
          <View style={styles.appBarIconLeft}>
            <Ionicons name="ios-arrow-back"
                      color={headerColor || "#000"}
                      size={FontSizes.appBarIconSize}
            />
          </View>
          <View style={styles.appBarTitleLeft}>
            <Text style={{
              fontSize: FontSizes.smallTitle,
              fontFamily: Fonts.regular,
              color: headerColor,
            }}>
              {headerLeftText}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const BackButtonWithNavigation = withNavigation(BackButton);

export class LargeTitle extends React.PureComponent {
  render() {
    const {headerTitle, headerColor, headerBackgroundColor, opacity, style} = this.props;
    return (
      <View
        style={[styles.largeTitleBar, headerBackgroundColor, style]}>
        <Animated.Text
          style={{
            color: headerColor || '#000',
            fontSize: FontSizes.largeTitle,
            fontFamily: Fonts.appBar,
            opacity
          }}>
          {headerTitle}
        </Animated.Text>
        {this.props.children}
      </View>
    )
  }
}

export class SearchBar extends React.PureComponent {
  render() {
    const {headerBackgroundColor, searchBarBackgroundColor, searchBarPlaceholderTextColor, opacity} = this.props;
    return (
      <Animated.View style={[styles.searchBarHeight, headerBackgroundColor, {opacity}]}>
        <View style={[styles.searchBox, searchBarBackgroundColor]}>
          <View style={styles.textInputIcon}>
            <Ionicons name="ios-search" size={14} color={searchBarPlaceholderTextColor || "#8E8E93"}/>
          </View>
          <View style={{flex: 1, marginLeft: 7}}>
            <TextInput
              style={{height: 50, fontFamily: Fonts.regular}}
              placeholder="ស្វែងរក"
              placeholderTextColor={searchBarPlaceholderTextColor || "#8E8E93"}
              underlineColorAndroid='transparent'
            />
          </View>
        </View>
      </Animated.View>
    )
  }
}

AppBar.propTypes = {
  headerTitle: PropTypes.string,
  headerLeftText: PropTypes.string,
  onHeaderPress: PropTypes.func,
  hasAnimation: PropTypes.bool,
  statusbarStyle: PropTypes.string,
  hasLargeTitle: PropTypes.bool,
  hasSearchBar: PropTypes.bool,
  headerBackgroundColor: PropTypes.string,
  headerColor: PropTypes.string,
  searchBarBackgroundColor: PropTypes.string,
  searchBarPlaceholderTextColor: PropTypes.string,
  renderHeaderRightButtons: PropTypes.any,
  isRefreshControlEnabled: PropTypes.bool,
  onRefresh: PropTypes.func,
  refreshing: PropTypes.bool,
  navigation: PropTypes.any.isRequired,
  useAppBarNavigation: PropTypes.bool.isRequired
};
