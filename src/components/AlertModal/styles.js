import {Dimensions, PixelRatio, StyleSheet, Platform} from "react-native";
import {Layout, Fonts, Colors} from "../../constants";

const platform = Platform.OS;

const borderRadius = 13;

export const styles = StyleSheet.create({
  mainContainer: {
    marginLeft: "12%",
    marginRight: "12%",
    borderRadius: borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    ...Platform.select({
      ios: {
        backgroundColor: 'rgba(255,255,255, 1)'
      },
      android: {
        backgroundColor: 'rgba(255,255,255, 1)',
      }
    }),
    borderRadius: borderRadius,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  modalContainer: {
    width: '100%',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
  },
  messageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
    // paddingLeft: 10,
    // paddingRight: 10,
  },
  buttonsContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  titleText: {
    fontFamily: Fonts.bold,
    fontSize: platform === 'ios' ? 18 : 17
  },
  messageText: {
    fontSize: platform === 'ios' ? 16 : 16,
    color: Colors.black(),
    fontFamily: Fonts.regular,
    textAlign: 'center'
  },
  buttonText: {
    fontSize: platform === 'ios' ? 15 : 14,
    color: Colors.primary,
    fontFamily: Fonts.regular
  },
  oneButtonContainer: {
    height: 45,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderTopWidth: 1,
  },
  twoButtonsContainer: {
    height: 45,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderTopWidth: 1,
  },
  threeButtonsContainer: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderTopWidth: 1,
  },
  borderBottomRightRadius: {
    borderBottomRightRadius: borderRadius
  },
  borderBottomLeftRadius: {
    borderBottomLeftRadius: borderRadius
  }
});
