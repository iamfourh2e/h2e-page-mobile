import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import { scale, verticalScale, moderateScale } from '../../libs/scaling';
import { Colors } from "../../constants";
import Feather from 'react-native-vector-icons/Feather';

// styles
import { styles } from './styles';
const Props = {};
const rateIconSize = scale(12);
export default class ListItems extends Component {
    renderListItems = (items, scrollHorizontal) => {
        const borderRight = {
            borderRightWidth: scale(0.25),
            borderRightColor: Colors.lightGrey,
            paddingRight: scale(15),
            marginRight: scale(15)
        };
        const borderBottom = {
            borderBottomWidth: scale(0.25),
            borderBottomColor: Colors.lightGrey
        };
        return items.map((data, k) => {
            items.length === k;
            return (
                <View key={k}>
                    <TouchableOpacity style={styles.contentItem}>
                        <View style={[styles.itemDetail,
                        items.length - 1 != k ? scrollHorizontal ? borderRight : borderBottom : null
                        ]}
                        >
                            <View style={styles.itemDetailImage}>
                                <Image
                                    style={styles.logo}
                                    source={{ uri: data.logo }}
                                />
                            </View>
                            <View style={styles.itemDetailText}>
                                <Text style={styles.companyName}>{data.companyName}</Text>
                                <Text style={styles.description}>{data.description}</Text>
                                <View style={styles.rate}>
                                    <Text style={styles.rateValue}>{data.rateValue}</Text>
                                    <Feather name='star' color={Colors.lightYellow} size={rateIconSize} />
                                </View>
                            </View>
                            {
                                !scrollHorizontal ? 
                                <View style={styles.rightIcon}>
                                    <Feather name="chevron-right" color={Colors.lightGrey} size={25}/>
                                </View> : null
                            }

                        </View>
                    </TouchableOpacity>
                </View>
            )
        })
    }
    render() {
        const { data, scrollHorizontal } = this.props;
        return (
            <ScrollView
                horizontal={scrollHorizontal}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                {this.renderListItems(data, scrollHorizontal)}
            </ScrollView>
        )
    }
}