import { StyleSheet, Platform } from "react-native";
import { Fonts, FontSizes, Layout, Colors } from "../../../../constants";
import { scale, verticalScale, moderateScale } from "../../../../libs/scaling";

const padding = scale(11);
const logoWrapperHeight = verticalScale(100);
const profileLogoWrapperHeight = verticalScale(90);
const profileLogoHeight = verticalScale(100);
const rateFollowHeight = verticalScale(35);

const HEADER_MAX_HEIGHT = verticalScale(200);
// const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_MIN_HEIGHT = verticalScale(65) + Layout.statusbarHeight;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export const styles = StyleSheet.create({
  seatsContainer: {
    flex: 1,
    padding:scale(22),
    // flexDirection:'column'
  },
  seatsRow:{
      alignItems:'center'
  }
});
