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

export class HeaderSearchBox extends React.Component {
  state = {
    component: IconComponent['Ionicons'],
    iconName: ''
  };

  componentWillMount() {
    this.setState({ iconName: this.props.iconName, component: IconComponent[this.props.iconComponent] })
  }

  render() {
    const {
      headerTitle,
      iconComponent,
      iconName,
      iconColor,
      backgroundColor,
      titleColor
    } = this.props;

    return (
      // '#27ae60'
      <View>
        <View style={{
          height: Layout.statusbarHeight,
          backgroundColor: backgroundColor ? backgroundColor : Colors.white(1)
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
          { backgroundColor: backgroundColor ? backgroundColor : Colors.white(1) }
        ]}>

          {/* header title */}
          <View style={styles.headerTitle}>
            {/* left icon */}
            <View style={styles.leftIcon}>
              <TouchableOpacity>
                <this.state.component name={this.state.iconName} color={iconColor ? iconColor : Colors.white(1)}
                  size={iconSize} />
              </TouchableOpacity>
            </View>

            {/* title */}
            <View style={styles.title}>
              <Text style={{
                color: titleColor ? titleColor : Colors.white(1),
                fontSize: headerTitleFontSize
              }}>{this.props.headerTitle}</Text>
            </View>
          </View>

          {this.props.children}
        </View>
      </View>
    );
  }
}
// example
{/* <HeaderSearchBox
  headerTitle={appTitle} 
  backgroundColor={backgroundColor}
  titleColor={color}
  iconComponent="Feather"  
  iconName="menu"         
  iconColor={color}
>
  <SearchBox
    backgroundColor={Colors.white(1)}
    placeholder="ស្វែងរក"
  />
</HeaderSearchBox> */}

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
          backgroundColor: backgroundColor ? backgroundColor : Colors.black(1),
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