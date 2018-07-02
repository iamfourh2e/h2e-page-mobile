import React from "react";
import PropTypes from 'prop-types';
import RNModal from "react-native-modal";
import {SafeAreaView} from 'react-navigation';
import {View, StyleSheet, TouchableWithoutFeedback} from "react-native";
import {Layout} from "../../constants";

export default class Modal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: false
    };
  }

  render() {
    const {visibleModal} = this.state;
    const position = this.props.position === 'center' ? 'center' : this.props.position === 'top' ? 'flex-start' : 'flex-end';
    const {backdropOpacity, animationIn, animationOut} = this.props;
    const defaultStyles = {
      backgroundColor: '#fff',
      justifyContent: 'center',
      borderRadius: 10,
      padding: 10,
      marginLeft: 40,
      marginRight: 40,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    };
    return (
      <View>
        <RNModal isVisible={visibleModal}
                 backdropOpacity={backdropOpacity || 0.3}
                 animationIn={animationIn || "fadeIn"}
          // animationInTiming={180}
                 animationOut={animationOut || "fadeOut"}
                 style={{
                   margin: 0,
                   justifyContent: position,
                 }}
                 onBackdropPress={() => this.hide()}
                 onBackButtonPress={() => this.hide()}>
          <SafeAreaView
            forceInset={{top: 'always', bottom: 'always'}}
            style={{...defaultStyles, ...this.props.style}}>
            {this.props.children}
          </SafeAreaView>
        </RNModal>
      </View>
    )
  }

  show = () => {
    this.setState({visibleModal: true});
  };
  hide = () => {
    this.setState({visibleModal: false});
  }
}

Modal.propTypes = {
  position: PropTypes.string,
  backdropOpacity: PropTypes.number,
  animationIn: PropTypes.string,
  animationOut: PropTypes.string
};