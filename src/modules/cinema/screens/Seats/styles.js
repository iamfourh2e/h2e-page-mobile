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
    // padding: padding,
    alignItems: "center"
    // flexDirection:'column'
  },
  seatsWrapper: {
    flex: 1,
    // flexDirection:'row',
    padding: padding
  },
  seatsRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: scale(7)
  },
  movieTitle: {
    fontSize: scale(15),
    marginTop: scale(-20)
  },
  filterSeatsWrapper: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  },
  btnFilterSeat: {
    backgroundColor: Colors.info,
    borderRadius: scale(10),
    paddingLeft: scale(10),
    paddingRight: scale(10),
    paddingTop: scale(5),
    paddingBottom: scale(5),
    justifyContent: "center",
    alignItems: "center",
    margin: scale(5)
  }
});
