import { StyleSheet, Platform } from 'react-native';
import { Fonts, FontSizes, Layout, Colors } from '../../constants';
import normailzeText from '../../libs/normailzeText';
import { scale, moderateScale, verticalScale } from '../../libs/scaling';

const width = Layout.window.width;
const height = Layout.window.height;

// header
const headerHeight = verticalScale(97);
const headerTitleHeight = verticalScale(44);
const padding = scale(11);

// searchBox
const searchBoxHeight = verticalScale(40);
const searchBoxBorderRadius = Platform.OS === 'ios' ? scale(10) : scale(9);

export const styles = StyleSheet.create({
    header: {
        height: headerHeight,
        paddingLeft: padding,
        paddingRight: padding
    },
    headerTitle: {
        height: headerTitleHeight,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    leftIcon: {
        height: headerTitleHeight,
        width: headerTitleHeight,
        justifyContent: 'center'
    },
    title: {
        flex: 1,
        justifyContent: 'center'
    },
    searchBoxHeight: {
        height: searchBoxHeight,
        borderRadius: searchBoxBorderRadius,
        flexDirection: 'row'
    },
    searchBoxIconLeft: {
        height: searchBoxHeight,
        width: searchBoxHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBoxTextInput: {
        height: Platform.OS == 'ios' ? searchBoxHeight : headerTitleHeight-verticalScale(2),
        width: '100%',
        width: moderateScale(200),
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    textInput: {
        // height: headerTitleHeight,
        fontSize: Platform.OS == 'ios' ? normailzeText(15) : normailzeText(13)
    }
});