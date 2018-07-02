import React from 'react';
import {View, Text, TouchableHighlight, Platform, Animated, Keyboard} from 'react-native';
import Modal from 'react-native-modal'
import I18n from '../../configs/i18n';
import {styles} from './styles';
import {Colors, Layout} from "../../constants";

const Touchable = Platform.OS === 'android' ? TouchableHighlight : TouchableHighlight;

const Title = (props) => <Text numberOfLines={1}
                               style={[styles.titleText, {color: props.headerColor}]}>{props.title}</Text>;
const Message = (props) =>
  <Text style={styles.messageText}>{props.message}</Text>;

const Button = (props) => {
  const buttonsLength = props.buttons.length;
  const buttonsContainerStyle = styles.threeButtonsContainer;
  if (buttonsLength > 0) {
    return props.buttons.map((o, i) => {
      return (
        <Touchable
          key={i}
          underlayColor="#EFEFEF"
          style={[
            buttonsContainerStyle,
            i === buttonsLength - 1 ? [styles.borderBottomLeftRadius, styles.borderBottomRightRadius] : null
          ]}
          onPress={() => o.onPress(() => props.dismiss())}
        >
          <View>
            <View pointerEvents="none">
              <Text style={styles.buttonText}>{o.text}</Text>
            </View>
          </View>
        </Touchable>
      );
    });
  }
};

const CancelButton = (props) => {
  return (
    <Touchable underlayColor="#EFEFEF"
               style={[
                 styles.cancelButtonContainer,
                 styles.borderBottomLeftRadius,
                 styles.borderBottomRightRadius,
                 styles.borderTopLeftRadius,
                 styles.borderTopRightRadius
               ]}
               onPress={() => props.dismiss()}
    >
      <View>
        <View pointerEvents="none">
          <Text style={styles.buttonText}>{I18n.t('cancel')}</Text>
        </View>
      </View>
    </Touchable>
  )
};

class ActionSheetModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      headerColor: "#000",
      headerBackgroundColor: "transparent",
      message: '',
      buttons: [],
      showActionSheetModal: false,
    };
    this.animatedY = new Animated.Value(0);
  }

  componentDidMount() {
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', () => this._showKeyboard());
    this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', () => this._dismissKeyboard());
  }

  componentWillUnmount() {
    this.keyboardWillShowListener.remove();
    this.keyboardWillHideListener.remove();
  }

  _showKeyboard = () => {
    this.animatedScrollY(100);
  };
  _dismissKeyboard = () => {
    Keyboard.dismiss();
    Animated.spring(this.animatedY, {
      toValue: 0
    }).start();
  };

  animatedScrollY = (y) => {
    Animated.spring(this.animatedY, {
      toValue: -y
    }).start();
  };

  render() {
    const {animationIn, animationInTiming, animationOut, animationOutTiming} = this.props;
    const {headerColor, headerBackgroundColor, title, message, buttons, showActionSheetModal} = this.state;
    const buttonsLength = buttons.length;

    const animatedStyle = {
      scrollY: {
        transform: [
          {translateY: this.animatedY},
        ],
      }
    };

    const animIn = {
      0: {
        translateY: 100
      },
      0.1: {
        translateY: 85
      },
      0.2: {
        translateY: 35,
      },
      0.3: {
        translateY: 30,
      },
      0.4: {
        translateY: 25,
      },
      0.5: {
        translateY: 20,
      },
      0.7: {
        translateY: 15,
      },
      0.8: {
        translateY: 10,
      },
      0.9: {
        translateY: 5,
      },
      1: {
        translateY: 0
      }
    };
    return (
      <Modal
        isVisible={showActionSheetModal}
        style={{justifyContent: 'flex-end'}}
        onBackButtonPress={this.dismiss}
        onBackdropPress={this.props.allowOutSideClick ? this.dismiss : null}
        backdropOpacity={0.4}
        animationIn={animationIn ? animationIn : "slideInUp"}
        animationInTiming={animationInTiming ? animationInTiming : 350}
        animationOut={animationOut ? animationOut : "slideOutDown"}
        animationOutTiming={animationOutTiming ? animationOutTiming : 500}
        supportedOrientations={['portrait']}
        // onOrientationChange={}
      >
        <Animated.View style={[styles.mainContainer, animatedStyle.scrollY]}>
          {
            Platform.OS === 'ios' ?
              <View style={styles.modalBackground}/> :
              <View style={styles.modalBackground}/>
          }

          <View style={styles.modalContainer}>
            {
              title ?
                <View style={[styles.titleContainer, {backgroundColor: headerBackgroundColor}]}>
                  <Title title={title}
                         headerColor={headerColor}
                  />
                </View>
                :
                null
            }
            <View style={[styles.messageContainer]}>

              {this.props.children ? this.props.children : <Message message={message}/>}
            </View>
            <View style={styles.buttonsContainer}>
              <View style={{flexDirection: 'column', width: '100%'}}>
                <Button buttons={buttons} dismiss={this.dismiss}/>
              </View>
            </View>
          </View>
        </Animated.View>
        <View style={{paddingTop: 10, paddingBottom: 5}}>
          <CancelButton dismiss={this.dismiss}/>
        </View>
      </Modal>
    );
  }

  show = ({headerColor = "#000", headerBackgroundColor = "transparent", title, message, buttons}) => {
    this.setState({
      headerColor: headerColor,
      headerBackgroundColor: headerBackgroundColor || this.state.headerBackgroundColor,
      title, message, buttons,
      showActionSheetModal: true,
    })
  };
  dismiss = () => this.setState({showActionSheetModal: false});
}

export default ActionSheetModal;
