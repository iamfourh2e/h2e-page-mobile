import { StyleSheet, Platform } from 'react-native';
import { Fonts, FontSizes, Layout, Colors } from '../../../../constants';
import { scale, verticalScale, moderateScale } from '../../../../libs/scaling';

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
        flex: 1,
        flexDirection: 'row',
        paddingTop: padding,
        backgroundColor: Colors.white(1),
        marginBottom: scale(11)
    },
    profileLogoWrapper: {
        flex: 1,
        // width: verticalScale(120),
        justifyContent: 'center',
        backgroundColor: Colors.white(1),
        zIndex: 1,
        marginLeft: -padding,
        paddingLeft: padding
    },
    profileLogo: {
        width: profileLogoHeight,
        height: profileLogoHeight,
        resizeMode: 'contain',
    },
    followMessageRateWrapper: {
        // flex: 2.5,
        flex: 1,
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        // paddingRight: padding,
        // borderBottomColor: Colors.lightGrey,
        // borderBottomWidth: scale(.5),

    },
    followMessageWrapper: {
        flex: 2,
        height: verticalScale(50),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
        // borderBottomColor: Colors.lightGrey,
        // borderBottomWidth: scale(.5),
        // paddingBottom: scale(10),
        // marginLeft: padding,
        // marginRight: padding,
        zIndex: -1,
        backgroundColor: 'grey'
    },
    column: {
        flex: 1,
        height: verticalScale(50),
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'green'
    },
    title: {
        fontSize: scale(13),
        color: Colors.lightGrey
    },
    value: {
        fontSize: scale(18),
        color: Colors.info
    },

    // time
    showTimeHeader: {
        flex: 1,
        flexDirection: 'row'
    },
    showTimeTitle: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    showTimeTitleCenter: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    showTimeTitleRight: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    // scrollView
    fill: {
        flex: 1,
        backgroundColor: Colors.white(1)
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
    scrollViewContent: {
        flex: 1,
        backgroundColor: Colors.white(1),
        // iOS uses content inset, which acts like padding.
        paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
        paddingLeft: padding,
        paddingRight: padding,
        zIndex: 10,
        paddingBottom: scale(10)
    },
    row: {
        height: 40,
        marginTop: scale(11),
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Schedule
    scheduleWrapper: {
        flex: 1
    },
    scheduleHeader: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: scale(20)
    },
    scheduleHeaderTitle: {
        fontSize: scale(23),
        marginRight: scale(5),
        color: Colors.black(1)
    },
    scheduleHeaderSubTitle: {
        fontSize: scale(15),
        color: Colors.lightGrey
    },
    scheduleRowList: {
        flex: 1,
        flexDirection: 'row',
        marginTop: Platform.OS == 'ios' ? scale(40) : scale(20),
        zIndex: 10,
        paddingTop: Platform.OS == 'ios' ? 0 : scale(20)
    },
    scheduleImageWrapper: {
        width: verticalScale(100),
        height: verticalScale(120),
        zIndex: 10,
        position: 'absolute',
        borderRadius: scale(10),
        alignItems: 'flex-start',
        marginTop: Platform.OS == 'ios' ? -scale(25) : scale(0)
    },
    scheduleImage: {
        width: verticalScale(100),
        height: verticalScale(120),
        borderRadius: scale(10)
    },
    scheduleMovieTitleWrapper: {
        flex: 1,
        width: Platform.OS == 'ios' ? '95%' : '90%',
        position: 'absolute',
        top: 0,
        marginTop: Platform.OS == 'ios' ? -scale(20) : 0,
        marginBottom: scale(25),
        justifyContent: 'center',
    },
    scheduleMovieTitle: {
        marginLeft: Platform.OS == 'ios' ? scale(110) : scale(100),
        fontSize: scale(18),
        color: Colors.info,
        fontFamily: Fonts.khpreyveng
    },
    scheduleMovieDetailWrapper: {
        flex: 1,
        marginRight: scale(20),
        marginLeft: scale(20),
        backgroundColor: Platform.OS == 'ios' ? Colors.white(1) : '#2d3436',
        zIndex: -10,
        top: 0,
        marginTop: Platform.OS == 'ios' ? scale(20) : scale(15),
        bottom: scale(20),
        shadowColor: Colors.black(1),
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 12,
        borderRadius: 12,
        padding: scale(10),
    },
    scheduleMovieTextDetail: {
        marginLeft: Platform.OS == 'ios' ? scale(80) : scale(70),
        marginTop: scale(3),
        fontSize: scale(14)
    },
    movieTime: {
        color: Platform.OS == 'ios' ? Colors.danger : Colors.white(1)
    },
    movieDuration: {
        color: Platform.OS == 'ios' ? Colors.niceBlue : Colors.white(1)
    },
    movieType: {
        color: Colors.lightGrey
    },
    availableSeatWrapper: {
        flexDirection: 'row',
        marginLeft: Platform.OS == 'ios' ? scale(80) : scale(70),
    },
    availableSeat: {
        color: Colors.success,
        marginLeft: 0
    },
    bookTicket: {
        width: verticalScale(60),
        height: verticalScale(40),
        backgroundColor: Colors.info,
        // marginTop: -scale(25),
        zIndex: 10,
        position: 'absolute',
        right: 0,
        top: 0,
        marginTop: Platform.OS == 'ios' ? scale(50) : scale(70),
        borderRadius: scale(10),
        justifyContent: 'center',
        alignItems: 'center'
    }
});