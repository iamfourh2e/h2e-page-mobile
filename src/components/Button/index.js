import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import PropTypes from "prop-types";
//constant
import { Colors, Fonts, Layout } from "../../constants";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import WBIcon from '../../components/H2Eicon';

/**
 * Set Icon component
 */
const IconComponent = {
  Ionicons: Ionicons,
  Feather: Feather,
  WBIcon: WBIcon
};

// Button
export class Button extends React.Component {
  state = {
    component: IconComponent['Ionicons'],
    iconName: ''
  };

  componentWillMount() {
    this.setState({ iconName: this.props.iconName, component: IconComponent[this.props.iconComponent] })
  }

  render() {
    const {
      background, height, width,
      outline, rounded, roundedSquare,
      iconLeft, iconRight, iconComponent, iconName, iconSize,
      title, color, fontSize, onPress, onLongPress, disabled,
      style
    } = this.props;
    let outlineColor = color || background;
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          activeOpacity={!!onPress ? 0.2 : 1}
          disabled={disabled}
          onPress={() => !!onPress ? onPress() : null}
          onLongPress={() => !!onLongPress ? onLongPress() : null}
          style={[style, {
            backgroundColor: outline ? "rgba(255, 255, 255,0)" : disabled ? Colors.cloud : background,
            height: height ? height : 44,
            width: width ? width : null,
            justifyContent: "center",
            alignItems: "center",
            paddingRight: 10,
            paddingLeft: 10,
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: outline ? background : 'rgba(255,255,255,0)',
            borderRadius: rounded ? 50 : roundedSquare ? 8 : 0,
          }]}>
          {
            iconLeft ?
              <this.state.component name={this.state.iconName} color={outline ? outlineColor : color}
                size={iconSize ? iconSize : 25} style={{ marginRight: 5 }} />
              :
              null
          }
          <Text style={{
            color: outline ? outlineColor : color,
            fontSize: fontSize ? fontSize : 18,
            textAlign: 'center',
            fontFamily: Fonts.regular
          }}>{title}
          </Text>
          {
            iconRight ?
              <this.state.component name={this.state.iconName} color={outline ? outlineColor : color}
                size={iconSize ? iconSize : 25} style={{ marginRight: 5 }} />
              :
              null
          }
        </TouchableOpacity>
      </View>
    )
  }
}

// IconButton
export class IconButton extends React.Component {
  state = {
    component: IconComponent['Ionicons'],
    iconName: ''
  };

  componentWillMount() {
    this.setState({ iconName: this.props.iconName, component: IconComponent[this.props.iconComponent] })
  }

  render() {
    const {
      background, size,
      outline, rounded, roundedSquare,
      iconComponent, iconName, iconSize,
      disabled,
      color,
      onPress,
      style
    } = this.props;
    let outlineColor = color || background;

    let radiusSize = 0;
    if (rounded) {
      radiusSize = 50
    }
    if (roundedSquare) {
      if (size > 35) {
        radiusSize = 12
      } else {
        radiusSize = 8
      }
    }
    return (
      <View style={{ alignItems: 'center', flex: 1 }}>
        <TouchableOpacity
          disabled={disabled}
          activeOpacity={!!onPress ? 0.2 : 1}
          onPress={() => !!onPress ? onPress() : null}
          style={[style, {
            backgroundColor: outline ? "rgba(255, 255, 255,0)" : disabled ? Colors.cloud : background,
            height: size ? size : 44,
            width: size ? size : 44,
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: outline ? background : 'rgba(255,255,255,0)',
            borderRadius: radiusSize
          }]}>
          <this.state.component
            name={this.state.iconName} color={outline ? outlineColor : color}
            size={iconSize ? iconSize : size ? size / 2 : 25}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

// example
{/* <IconButton
    background="green"
    outline
    rounded
    iconComponent="Feather"
    iconName="user"
    size={100}
/> */
}

{/*
<Button
  background="red"
  rounded
  iconLeft
  title="App"
  color="#fff"
  iconComponent="Feather"
  iconName="user"
/>*/
}
