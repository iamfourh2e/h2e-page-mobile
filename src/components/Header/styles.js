import { StyleSheet } from 'react-native';
import { Fonts, FontSizes, Layout, Colors } from '../../constants';

const width = Layout.window.width;
const height = Layout.window.height;

// header
const headerHeight = height / 6.5;
const headerTitleHeight = headerHeight / 2;
const padding = width / 34;
const iconSize = width / 12;
const headerTitleFontSize = width / 15;

// searchBox
const searchBoxHeight = headerTitleHeight - padding;
const searchBoxBorderRadius = width / 30;
const searchBoxIcon = width / 15;
const searchBoxFontSize = width / 20;

export const styles = StyleSheet.create({
    headerHeight: {
        height: headerHeight,
        paddingLeft: padding,
        paddingRight: padding
    },
    headerTitleHeight: {
        height: headerTitleHeight,
        flexDirection: 'row'
    },
    headerTitleLeftIcon: {
        height: headerTitleHeight,
        width: headerTitleHeight,
        justifyContent: 'center'
    },
    headerTitle: {
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
        flex: 1,
        justifyContent: 'center'
    }
});