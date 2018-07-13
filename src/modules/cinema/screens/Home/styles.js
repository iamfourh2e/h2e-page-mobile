import { StyleSheet, Platform } from 'react-native';
import { Fonts, FontSizes, Layout, Colors } from '../../../../constants';
import { scale, verticalScale, moderateScale } from '../../../../libs/scaling';

const padding = scale(11);
const logoWrapperHeight = verticalScale(100);
const profileLogoWrapperHeight = verticalScale(90);
const profileLogoHeight = verticalScale(60);
const rateFollowHeight = verticalScale(35);

const HEADER_MAX_HEIGHT = verticalScale(200);
// const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_MIN_HEIGHT = verticalScale(65) + Layout.statusbarHeight;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export const styles = StyleSheet.create({
    content: {
        flex: 1
    },
    coverWrapper: {
        height: verticalScale(200),
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: -1
    },
    profileRow: {
        flexDirection: 'row'
    },
    profileLogoWrapper: {
        marginLeft: scale(11),
        width: profileLogoWrapperHeight,
        height: profileLogoWrapperHeight,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white(1),
        borderRadius: scale(100),
        marginBottom: verticalScale(10),
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        // zIndex: 10
    },
    profileLogo: {
        width: profileLogoHeight,
        height: profileLogoHeight,
        resizeMode: 'contain'
    },
    followMessageRateWrapper: {
        flex: 1,
        height: rateFollowHeight,
        backgroundColor: Colors.white(1),
        marginTop: verticalScale(120),
        flexDirection: 'row'
    },
    followMessageWrapper: {
        flex: 1.5,
        height: verticalScale(50),
        flexDirection: 'row'
    },
    rateWrapper: {
        flex: 1,
        height: rateFollowHeight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentWrapper: {
        paddingLeft: padding,
        paddingRight: padding
    },
    companyWrapper: {
        flexDirection: 'row',
        height: logoWrapperHeight
    },
    logoWrapper: {
        width: logoWrapperHeight,
        height: logoWrapperHeight
    },
    logo: {
        height: logoWrapperHeight,
        width: logoWrapperHeight,
        resizeMode: 'contain'
    },
    titleWapper: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: scale(15),
        justifyContent: 'center'
    },
    mainTitle: {
        fontSize: scale(17)
    },
    subTitle: {
        fontSize: scale(14),
        color: Colors.lightGrey
    },
    rate: {
        height: logoWrapperHeight / 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    rateValue: {
        fontSize: scale(18),
        color: Colors.lightYellow
    },
    postFollowingFollowWrapper: {
        flexDirection: 'row',
        borderBottomColor: Colors.lightGrey,
        borderBottomWidth: scale(.5),
        paddingBottom: Platform.OS == 'ios' ? 0 : scale(10),
        marginLeft: padding,
        marginRight: padding
    },
    column: {
        flex: 1,
        height: verticalScale(50),
        alignItems: 'center'
    },
    title: {
        fontSize: scale(12),
        color: Colors.lightGrey
    },
    value: {
        fontSize: scale(20),
        color: Colors.info
    },

    // scrollView
    fill: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,1)',
        overflow: 'hidden',
        height: HEADER_MAX_HEIGHT
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover'
    },
    bar: {
        flex: 1,
        backgroundColor: 'transparent',
        // height: verticalScale(65),
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    title: {
        color: 'white',
        fontSize: 18,
    },
    scrollViewContent: {
        // iOS uses content inset, which acts like padding.
        paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
    },
    row: {
        height: 40,
        margin: 16,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
    },
});