import { StyleSheet, Platform } from 'react-native';
import { Fonts, FontSizes, Layout, Colors } from '../../constants';
import { scale, verticalScale, moderateScale } from '../../libs/scaling';

const width = Layout.window.width;
const padding = scale(11);
const contentCategoryHeight = verticalScale(150);
const categoryHeaderHeight = verticalScale(45);
const categoryImageHeight = verticalScale(80)
const catgeoryImageBorderRadius = scale(12);
const itemDetailHeight = verticalScale(90);

export const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    contentWrapper: {
        height: contentCategoryHeight,
        paddingRight: padding,
        paddingLeft: padding
    },
    contentSlide: {
        height: verticalScale(180),
        width: width
    },
    swiperWrap: {
        height: verticalScale(180)
    },
    slideImage: {
        height: verticalScale(180),
        width: width,
        resizeMode: "contain"
    },
    contentHeader: {
        height: categoryHeaderHeight,
        flexDirection: 'row'
    },
    contentHeaderTitle: {
        flex: 1,
        justifyContent: 'center',
    },
    contentHeaderTextTitleLeft: {
        color: Colors.black(1),
        fontSize: scale(17)
    },
    contentHeaderTextTitleRight: {
        color: Colors.black(1),
        fontSize: scale(12),
        textAlign: 'right'
    },
    categoryItems: {
        flex: 1,
        flexDirection: 'row'
    },
    categoryItemsDetail: {
        flex: 1,
        alignItems: 'center',
        marginRight: scale(10)
    },
    categoryImage: {
        height: categoryImageHeight,
        width: categoryImageHeight,
        borderRadius: catgeoryImageBorderRadius
    },
    categoryTitle: {
        fontSize: scale(12),
        marginTop: scale(2),
        color: Colors.black(1)
    },
    popularHeader: {
        height: categoryHeaderHeight,
        justifyContent: 'center'
    },
    contentItem: {
        height: itemDetailHeight,
        marginBottom: scale(10),
        justifyContent: 'center'
    },
    itemDetail: {
        height: itemDetailHeight,
        flexDirection: 'row',
    },
    itemDetailText: {
        justifyContent: 'center'
    },
    itemDetailImage: {
        height: itemDetailHeight,
        width: itemDetailHeight,
        justifyContent: 'center'
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
    showMore: {
        color: Colors.info,
        fontSize: scale(13),
        textAlign: 'center',
        marginBottom: scale(10)
    }
});