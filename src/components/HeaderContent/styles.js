import { StyleSheet, Platform } from 'react-native';
import { Colors } from '../../constants';
import { scale, verticalScale, moderateScale } from '../../libs/scaling';

const categoryHeaderHeight = verticalScale(45);

export const styles = StyleSheet.create({
    headerContent: {
        height: categoryHeaderHeight,
        flexDirection: 'row'
    },
    headerContentTitle: {
        flex: 1,
        justifyContent: 'center',
    },
    headerContentTextTitleLeft: {
        color: Colors.black(1),
        fontSize: scale(17),
        fontWeight: Platform.OS == 'ios' ? '300' : '400',
    },
    headerContentTextTitleRight: {
        color: Colors.skyBlue,
        fontSize: scale(14),
        textAlign: 'right'
    }
});