import { Dimensions, Platform, StatusBar } from 'react-native';
import NormalizeText from '../components/NormalizeText';

const X_WIDTH = 375;
const X_HEIGHT = 812;
const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');

const isIPhoneX =
  Platform.OS === 'ios' && (D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH);
const notchHeight = isIPhoneX ? 20 : 0;

const isSmallDevice = D_WIDTH < 357;

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const statusBar = Platform.OS === 'ios' ? 20 :
  Platform.OS === 'android' && Platform.Version >= 20 ? 24 : 0;
// const statusBar = StatusBar.currentHeight;
const header = 192;
const appBarHeight = APPBAR_HEIGHT;
const largeTopBarHeight = 70;
const searchBoxHeight = 36;
export const Layout = {
  window: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  notchHeight,
  isSmallDevice,
  headerHeight: Platform.OS === 'android' ? APPBAR_HEIGHT : APPBAR_HEIGHT + notchHeight,
  statusbarHeight: statusBar,
  orientation: (this.window.width > this.window.height) ? 'LANDSCAPE' : 'PORTRAIT',
  header: header - statusBar,
  appBarHeight: appBarHeight,
  largeTopBarHeight: largeTopBarHeight,
  searchBarHeight: header - appBarHeight - largeTopBarHeight - statusBar,
  searchBoxHeight: searchBoxHeight
};

export const Fonts = {
  bold: null,
  regular: null,
  appBar: null
  // battambang: 'Battambang',
  // battambangBold: 'Battambang-Bold',
  // khpreyveng: 'KhPreyVeng',
  // moul: 'Moul',
  // wbIcon: Platform.OS === 'android' ? 'WBIcon' : 'icomoon'
};

export const Colors = {
  primary: '#077eff',
  danger: '#e84118',
  success: '#05c46b',
  warning: '#ffd32a',
  info: '#0fbcf9',
  mintyGreen: '#0be881',
  sunFlower: '#f1c40f',
  darkPurple: '#3c40c6',
  purple: '#8e44ad',
  orange: '#f39c12',
  carrot: '#e67e22',
  emerald: '#2ecc71',
  cloud: '#d2dae2',
  silver: '#bdc3c7',
  grey: '#8e8e8e',
  skyBlue: "#00A4FF",
  cyan: '#0abde3',
  midNight: '#34495e',
  navy: "#3b6ea5",
  niceBlue: "rgba(11, 103, 176, 0.8)",
  background: '#cae7fc',
  listBackground: '#EFEFF4',
  clear: 'transparent',
  white: opacity => `rgba(255,255,255,${opacity || 1})`,
  black: opacity => `rgba(0,0,0,${opacity || 1})`,
  lightGrey: '#ADADAD',
  lightYellow: '#F7B731'
};

export const FontSizes = {
  mainTitle: NormalizeText(16),
  subMainTitle: NormalizeText(13),
  itemTitle: NormalizeText(12),
  subItemTitle: NormalizeText(10),

  title: isSmallDevice ? 16 : 18,
  invoiceDetailFontSize: isSmallDevice ? 16 : 18,
  subtitle: isSmallDevice ? 14 : 16,
  bodyLarge: 14,
  bodyTitle: isSmallDevice ? 14 : 15,
  normalButton: isSmallDevice ? 15 : 16,
  appBarIconSize: 26,
  smallTitle: 17,
  largeTitle: 27
};

export const ToastStyles = (type) => {
  let background = Colors.black();
  switch (type) {
    case 'success':
      background = Colors.success;
      break;
    case 'danger':
      background = Colors.danger;
      break;
    case 'warning':
      background = Colors.warning;
      break;
    case 'info':
      background = Colors.info;
      break;
    default:
      break;
  }
  return {
    backgroundColor: background,
    width: 300,
    height: Platform.OS === "ios" ? 50 : 130,
    color: "#ffffff",
    fontSize: 15,
    lineHeight: 2,
    lines: 4,
    borderRadius: 15,
    fontWeight: "bold",
    yOffset: 40
  }
};


export const Images = {
  cinema: require('../assets/images/cinema.png'),
  restaurant: require('../assets/images/restaurant.png'),
  hotel: require('../assets/images/hotel.png'),
  shop: require('../assets/images/shop.png'),
  restaurant_01: require('../assets/slide/restaurant_01.png'),
  restaurant_02: require('../assets/slide/restaurant_02.png'),
  restaurant_03: require('../assets/slide/restaurant_03.png'),
  restaurant_04: require('../assets/slide/restaurant_04.png'),
  restaurant_05: require('../assets/slide/restaurant_05.png'),
  restaurant_06: require('../assets/slide/restaurant_06.png'),

  // appLogo: require('../assets/images/icon_500.png'),
  // user: require('../assets/images/user.png'),
  // background: require('../assets/images/blurBg.png'),
  // notFound: require('../assets/images/404NotFound.png'),
  // coming :require('../assets/images/coming.png')
};

export const Metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
};

const pjson = require('../../package.json');
export const PJson = {
  appName: pjson.appName,
  version: pjson.version,
  address: 'បាត់ដំបង',
  phone: '012 345 678'
};

export const Strings = {
  'page': 'ទំព័រ'
};