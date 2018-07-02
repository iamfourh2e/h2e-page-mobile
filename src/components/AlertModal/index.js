import React from 'react';
import {View, Text, TouchableHighlight, Platform, Animated, Keyboard} from 'react-native';
import Modal from 'react-native-modal'
import {styles} from './styles';
import {Layout} from "../../constants";
const Touchable = Platform.OS === 'android' ? TouchableHighlight : TouchableHighlight;

const Title = (props) => <Text numberOfLines={1}
                               style={[styles.titleText, {color: props.headerColor}]}>{props.title}</Text>;
const Message = (props) =>
  <Text style={styles.messageText}>{props.message}</Text>;

const Button = (props) => {
  const buttonsLength = props.buttons.length;
  const buttonsContainerStyle = buttonsLength === 1 ? styles.oneButtonContainer :
    buttonsLength === 2 ? styles.twoButtonsContainer :
      buttonsLength >= 3 ? styles.threeButtonsContainer : null;
  if (buttonsLength > 0) {
    return props.buttons.map((o, i) => {
      return (
        <Touchable
          key={i}
          underlayColor="#EFEFEF"
          style={[
            buttonsContainerStyle,
            buttonsLength === 1 ? [styles.borderBottomLeftRadius, styles.borderBottomRightRadius] :
              buttonsLength === 2 ? [
                  i === 0 ? [styles.borderBottomLeftRadius, {borderRightWidth: 1}] : [styles.borderBottomRightRadius, {borderRightWidth: 0}]
                ] :
                buttonsLength >= 3 && i === buttonsLength - 1 ? [styles.borderBottomLeftRadius, styles.borderBottomRightRadius] : null
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

class AlertModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      headerColor: "#000",
      headerBackgroundColor: "transparent",
      message: '',
      buttons: [],
      openAlertModal: false,
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
    const {headerColor, headerBackgroundColor, title, message, buttons, openAlertModal} = this.state;
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
        scale: 1.15,
      },
      0.1: {
        scale: 1.10
      },
      0.2:{
        scale: 1.09,
      },
      0.3: {
        scale: 1.08,
      },
      0.4: {
        scale: 1.07,
      },
      0.5: {
        scale: 1.06,
      },
      0.6: {
        scale: 1.05,
      },
      0.7: {
        scale: 1.04,
      },
      0.8: {
        scale: 1.03,
      },
      0.9: {
        scale: 1.02,
      },
      1: {
        scale: 1,
      },
    };
    const animOut = {
      0: {
        opacity: 1,
        scale: 1
      },
      0.2: {
        opacity: 0.3,
        scale: 0.9
      },
      0.8: {
        opacity: 0.1,
        scale: 0.9
      },
      1: {
        opacity: 0,
        scale: 0.9,
      },
    };

    return (
      <Modal
        isVisible={openAlertModal}
        // style={[styles.modal]}
        onBackButtonPress={this.dismiss}
        onBackdropPress={this.props.allowOutSideClick ? this.dismiss : null}
        backdropOpacity={0.4}
        animationIn={animationIn ? animationIn : animIn}
        animationInTiming={animationInTiming ? animationInTiming : 250}
        animationOut={animationOut ? animationOut : animOut}
        animationOutTiming={animationOutTiming ? animationOutTiming : 250}
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
              <View style={
                buttonsLength === 2 ? {flex: 0, flexDirection: 'row'} :
                  buttonsLength === 1 ? {flex: 0, flexDirection: 'row'} :
                    {flex: 0, flexDirection: 'column', width: '100%'}
              }>
                <Button buttons={buttons} dismiss={this.dismiss}/>
              </View>
            </View>
          </View>
        </Animated.View>
      </Modal>
    );
  }

  alert = ({headerColor = "#000", headerBackgroundColor = "transparent", title, message, buttons}) => {
    this.setState({
      headerColor: headerColor,
      headerBackgroundColor: headerBackgroundColor || this.state.headerBackgroundColor,
      title, message, buttons,
      openAlertModal: true,
    })
  };
  dismiss = () => this.setState({openAlertModal: false});
}

export default AlertModal;
