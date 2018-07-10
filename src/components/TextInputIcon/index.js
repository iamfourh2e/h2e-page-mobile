import React from 'react';
import { Text, View, TextInput, Platform } from 'react-native';
import { scale, moderateScale, verticalScale } from '../../libs/scaling';

import { } from "../../constants";
import Feather from 'react-native-vector-icons/Feather';
// styles
import { styles } from './styles';

export default class TextInputIcon extends React.Component {
    render() {
        const { backgroundColor, borderRadius} = this.props;
        return (
            <View style={{
                height: scale(36),
                backgroundColor: backgroundColor ? backgroundColor : '#F5F5F5',
                borderRadius: borderRadius ? borderRadius : scale(6),
                flexDirection: 'row'
            }}>
                {this.props.children}
            </View>
        );
    }
}

// Icon
export class Icon extends React.Component {
    render() {
        const { name, size, color } = this.props;
        return (
            <View style={{
                width: scale(36),
                height: scale(36),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Feather name={name ? name : 'search'} size={size ? size : scale(20)} color={color ? color : '#CCCCCC'} />
            </View>
        )
    }
}

// input
export class Input extends React.Component {
    render() {
        const { placeholder, placeholderColor} = this.props;
        return (
            <TextInput
                placeholder={placeholder ? placeholder : 'search'}
                placeholderColor={placeholderColor ? placeholderColor : '#CCCCCC'}
                underlineColorAndroid='transparent'
                style={{
                    flex: 1,
                    fontSize: scale(15),
                    paddingBottom: Platform.OS == 'ios' ? 0 : scale(6)
                }}
            />
        )
    }
}