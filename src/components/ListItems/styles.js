import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';
import { scale, verticalScale } from '../../libs/scaling';
const itemDetailHeight = verticalScale(90);

export const styles = StyleSheet.create({
    contentItem: {
        height: itemDetailHeight,
        marginBottom: scale(10),
        justifyContent: 'center'
    },
    itemDetail: {
        height: itemDetailHeight,
        flexDirection: 'row'
    },
    itemDetailText: {
        flex: 1,
        justifyContent: 'center'
    },
    itemDetailImage: {
        height: itemDetailHeight,
        width: itemDetailHeight,
        justifyContent: 'center',
    },
    logo: {
        height: itemDetailHeight - 20,
        width: itemDetailHeight - 20,
        resizeMode: 'contain'
    },
    companyName: {
        fontSize: scale(13),
        color: Colors.black(1)
    },
    description: {
        fontSize: scale(12),
        color: Colors.lightGrey
    },
    popularItemDetailText: {
        flex: 1
    },
    rate: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    rateValue: {
        fontSize: scale(12),
        color: Colors.lightYellow
    },
    rightIcon: {
        height: itemDetailHeight,
        width: verticalScale(25),
        justifyContent: 'center'
    }
});