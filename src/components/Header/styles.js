import { StyleSheet } from 'react-native';
import { Fonts, FontSizes, Layout, Colors } from '../../constants';
import { scale, moderateScale, verticalScale } from '../../libs/scaling';

// header
const headerHeight = verticalScale(65);
const padding = scale(11);

// searchBox
const searchBoxHeight = verticalScale(45);

export const styles = StyleSheet.create({
    header: {
        height: headerHeight,
        paddingLeft: padding,
        paddingRight: padding,
        justifyContent: 'center'
    },
    headerTitle: {
        flexDirection: 'row',
        height: searchBoxHeight
    },
    title: {
        flex: 1,
        justifyContent: 'center'
    },
    titleText: {
        fontSize: scale(20)
    },
    headerIcon: {
        height: searchBoxHeight,
        width: searchBoxHeight,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    searchBoxWrapper: {
        height: searchBoxHeight,
        borderRadius: scale(5),
        flexDirection: 'row',
    },
    searchBoxIconLeft: {
        height: searchBoxHeight,
        width: searchBoxHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBoxTextInput: {
        flex: 1,
        justifyContent: 'center'
    },
    textInput: {
        height: searchBoxHeight + 10,
        fontSize: scale(15)
    }
});