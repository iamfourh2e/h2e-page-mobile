import React from "react";
import { Animated, View, TouchableOpacity } from "react-native";
import { SnapCarousel } from "@components";

import { Colors, Layout, Images } from "../../../../constants";
import Feather from "react-native-vector-icons/Feather";
import { scale, verticalScale, moderateScale } from "../../../../libs/scaling";
import { styles } from "./styles";

export default class ShowTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scaleShowingTime: new Animated.Value(scale(18)),
      scaleComingTime: new Animated.Value(scale(18)),
      showing: false,
      coming: false
    };
  }
  animatedScaleTimeTitle = (showing, coming) => {
    Animated.parallel([
      Animated.timing(this.state.scaleShowingTime, {
        toValue: showing,
        duration: 250
      }),
      Animated.timing(this.state.scaleComingTime, {
        toValue: coming,
        duration: 250
      })
    ]).start();
  };
  showing = () => {
    this.setState({ showing: true, coming: false });
    this.animatedScaleTimeTitle(scale(23), scale(18));
  };
  coming = () => {
    this.setState({ coming: true, showing: false });
    this.animatedScaleTimeTitle(scale(18), scale(23));
  };
  componentDidMount() {
    this.showing();
  }
  render() {
    const { showingData, comingData, state } = this.props;
    return (
      <View>
        <View style={styles.showTimeHeader}>
          <TouchableOpacity
            onPress={() => this.showing()}
            style={styles.showTimeTitle}
          >
            <Animated.Text
              style={{
                color: this.state.showing ? Colors.black(1) : Colors.lightGrey,
                fontSize: this.state.showing ? scale(23) : scale(18)
              }}
            >
              Showing
            </Animated.Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.coming()}
            style={styles.showTimeTitleCenter}
          >
            <Animated.Text
              style={{
                color: this.state.coming ? Colors.black(1) : Colors.lightGrey,
                fontSize: this.state.coming ? scale(23) : scale(18)
              }}
            >
              Coming
            </Animated.Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: scale(11) }}>
          {this.state.showing && (
            <SnapCarousel data={showingData} autoplay={true} />
          )}
          {this.state.coming && (
            <SnapCarousel data={comingData} autoplay={true} />
          )}
        </View>
      </View>
    );
  }
}
