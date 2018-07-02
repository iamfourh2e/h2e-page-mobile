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
        const { headerBackground } = this.props;
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
                    showHideTransition={'fade'}
                    translucent={true}
                    backgroundColor="rgba(0, 0, 0, 0.3)"
                />
                <View style={[
                    styles.header,
                    { backgroundColor: headerBackground ? headerBackground : Colors.white(1) }
                ]}>
                    {this.props.children}
                </View>
            </View >
        );
    }
}

// HeaderTitle
export class HeaderTitle extends React.Component {
    render() {
        const { title } = this.props;
        return (
            <View style={styles.headerTitle}>
                {this.props.children}
                <View style={styles.title}>
                    <Text style={[styles.titleText, { color: Colors.white(1) }]}>{title}</Text>
                </View>
            </View>
        )
    }
}

export class HeaderIcon extends React.Component {
    render() {
        const { style } = this.props;
        return (
            <View style={[styles.headerIcon, style]}>
                {this.props.children}
            </View>
        )
    }
}

// SearchBox
export class SearchBox extends React.Component {
    render() {
        const {
            searchBoxBackground,
            placeholder,
            placeholderTextColor,
            color,
            iconColor
        } = this.props;
        return (
            <View style={[styles.searchBoxWrapper, {
                backgroundColor: searchBoxBackground ? searchBoxBackground : Colors.white(1)
            }]}>
                {this.props.children}
                {/* <View style={styles.searchBoxIconLeft}>
                    <TouchableOpacity>
                        <Feather name='menu' size={scale(25)} color={iconColor ? iconColor : Colors.grey} />
                    </TouchableOpacity>
                </View> */}
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
        )
    }
}

// example
{/* <SearchBox
  backgroundColor={Colors.white(1)}
  placeholder="ស្វែងរក"
/> */}