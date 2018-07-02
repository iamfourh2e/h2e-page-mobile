import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import { styles } from './styles';

const Props = {};
export default class HeaderContent extends Component {
    render() {
        const { title, more } = this.props;
        return (
            <View style={styles.headerContent}>
                <View style={styles.headerContentTitle}>
                    <Text style={styles.headerContentTextTitleLeft}>{title}</Text>
                </View>
                <View style={styles.headerContentTitle}>
                    <TouchableOpacity>
                        <Text style={styles.headerContentTextTitleRight}>{more}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}