import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    TextInput,
    StatusBar
} from 'react-native';
import { I18n } from '../../configs';
import normailzeText from '../../libs/normailzeText';
import { scale, moderateScale, verticalScale } from '../../libs/scaling';

import { Colors, Layout } from "../../constants";
import Feather from 'react-native-vector-icons/Feather';

// component
import NormalizeText from '../NormalizeText';

/**
 * Set Icon component
 */
const IconComponent = {
    Feather: Feather
};

// styles
import { styles } from './styles';
import { SearchBar } from '../AppBar';

const width = Layout.window.width;
const height = Layout.window.height;

// header
const headerHeight = verticalScale(200);
const headerTitleHeight = headerHeight / 2;
const padding = width / 34;
const iconSize = scale(25);
const headerTitleFontSize = scale(20);

// searchBox
const searchBoxHeight = headerTitleHeight - padding;
const searchBoxBorderRadius = scale(30);
const searchBoxIcon = scale(14);
const searchBoxFontSize = scale(14);

export default class Header extends React.Component {
    state = {
        component: IconComponent['Ionicons'],
        iconName: ''
    };

    componentWillMount() {
        this.setState({ iconName: this.props.iconName, component: IconComponent[this.props.iconComponent] })
    }

    render() {
        const {
            headerBackground,
            searchBoxBackground,
            placeholder,
            placeholderTextColor,
            color,
            iconColor
        } = this.props;

        return (
            // '#27ae60'
            <View>
                <View style={{
                    height: Layout.statusbarHeight,
                    backgroundColor: headerBackground ? headerBackground : Colors.white(1)
                }}>
                </View>
                <StatusBar
                    barStyle={"light-content"}
                    animated
                    showHideTransition={'fade'}
                    translucent={true}
                    backgroundColor="rgba(0, 0, 0, 0.3)"
                />
                <View style={[
                    styles.header,
                    { backgroundColor: headerBackground ? headerBackground : Colors.white(1) }
                ]}>
                    <View style={[styles.searchBoxWrapper, {
                        backgroundColor: searchBoxBackground ? searchBoxBackground : Colors.white(1)
                    }]}>
                        <View style={styles.searchBoxIconLeft}>
                            <TouchableOpacity>
                                <Feather name='menu' size={scale(25)} color={iconColor ? iconColor : Colors.grey} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.searchBoxTextInput}>
                            <TextInput
                                underlineColorAndroid='transparent'
                                placeholder='search'
                                placeholder={placeholder}
                                placeholderTextColor={placeholderTextColor ? placeholderTextColor : Colors.grey}
                                style={[styles.textInput, {
                                    color: color ? color : Colors.black(1)
                                }]}
                            />
                        </View>
                    </View>
                </View>
            </View >
        );
    }
}

export class SearchBox extends React.Component {
    render() {
        const {
            placeholder,
            backgroundColor,
            borderColor,
            borderWidth,
            color,
            placeholderTextColor
        } = this.props;
        return (
            <View style={[
                styles.searchBoxHeight,
                {
                    backgroundColor: '#fff',
                    // backgroundColor: backgroundColor ? backgroundColor : Colors.black(1),
                    borderColor: borderColor ? borderColor : Colors.white(1),
                    borderWidth: borderWidth ? borderWidth : 0
                }
            ]}>
                <View style={styles.searchBoxIconLeft}>
                    <Feather name="search" size={searchBoxIcon} color={Colors.grey} />
                </View>
                <View style={styles.searchBoxTextInput}>
                    <TextInput
                        underlineColorAndroid='transparent'
                        // autoCapitalize="none"
                        placeholder={this.props.placeholder}
                        placeholderTextColor={placeholderTextColor ? placeholderTextColor : Colors.grey}
                        style={[styles.textInput, {
                            fontSize: searchBoxFontSize,
                            color: color ? color : Colors.black(1),
                        }]}
                    />
                </View>
            </View>
        )
    }
}

// example
{/* <SearchBox
  backgroundColor={Colors.white(1)}
  placeholder="ស្វែងរក"
/> */}