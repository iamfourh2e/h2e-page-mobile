import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {Header} from '../../components';
export default class CategoryList extends Component<Props> {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity 
                onPress={() => navigation.goBack(null)}
                >
                    <Text>Back</Text>
                </TouchableOpacity>
                <Text>Category List</Text>
            </View>
        )
    }
}

