import { StyleSheet } from 'react-native';
import { Fonts, FontSizes, Layout, Colors } from '../../constants';
import { scale, verticalScale, moderateScale } from '../../libs/scaling';

const padding = scale(11);
export const styles = StyleSheet.create({
    contentWrapper: {
        flex: 1,
        paddingRight: padding,
        paddingLeft: padding,
        marginTop: scale(20)
    }
});