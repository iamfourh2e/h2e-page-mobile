import React from "react";
import {
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity
} from "react-native";
import {
    H2Eicon
  } from "@components";

import { Colors, Layout, Images } from "../../../../constants";
import Feather from "react-native-vector-icons/Feather";
import { scale, verticalScale, moderateScale } from "../../../../libs/scaling";
import { styles } from "./styles";

export default class SecheduleList extends React.Component {
    constructor(props) {
      super(props);
      this.animatedScaleBtn = new Animated.Value(1);
      this.handlePressIn = this.handlePressIn.bind(this);
      this.handlePressOut = this.handlePressOut.bind(this);
      this.state = {
        showCover: false,
        imageSource: "",
        selectedIndex: null
      };
    }
    handlePressIn() {
      Animated.spring(this.animatedScaleBtn, {
        toValue: 0.9
      }).start();
    }
    handlePressOut() {
      Animated.spring(this.animatedScaleBtn, {
        toValue: 1,
        friction: 3,
        tension: 40
      }).start();
    }
    // goToSeats=()=>{
    //   this.props.navigation.navigate({routeName: 'CinemaHome', key: 'CinemaHome'});
    // }
    showMovieCover({ pageX, pageY, locationX, locationY }, source, index) {
      const topLeftX = pageX - locationX;
      const topLeftY = pageY - locationY;
      this.setState({
        topLeftX,
        topLeftY,
        showCover: true,
        imageSource: source,
        selectedIndex: index
      });
    }
    render() {
      const animatedStyle = {
        scaleLoginBtn: {
          transform: [{ scale: this.animatedScaleBtn }]
        }
      };
      const {
        movieTitle,
        movieTime,
        movieDuration,
        movieType,
        availableSeat,
        movieImage,
        navigation
      } = this.props;
      return (
        <View>
          <TouchableWithoutFeedback
            onPressIn={this.handlePressIn}
            onPressOut={this.handlePressOut}
            onPress={() => {
              navigation.navigate({
                routeName: "CinemaSeats",
                key: "CinemaSeats",
                params: this.props
              });
            }}
          >
            <Animated.View
              style={[styles.scheduleRowList, animatedStyle.scaleLoginBtn]}
            >
              {/* image */}
              <View style={styles.scheduleImageWrapper}>
                <Image
                  style={styles.scheduleImage}
                  source={{ uri: movieImage }}
                />
              </View>
  
              {/* Movie Title */}
              <View style={styles.scheduleMovieTitleWrapper}>
                <Text numberOfLines={1} style={styles.scheduleMovieTitle}>
                  {movieTitle}
                </Text>
              </View>
              {/* detail */}
              <View style={styles.scheduleMovieDetailWrapper}>
                <Text
                  numberOfLines={1}
                  style={[styles.scheduleMovieTextDetail, styles.movieTime]}
                >
                  {movieTime}
                </Text>
                <Text
                  numberOfLines={1}
                  style={[styles.scheduleMovieTextDetail, styles.movieDuration]}
                >
                  Duration : {movieDuration}
                </Text>
                <View style={{ flex: 1, width: "90%" }}>
                  <Text
                    numberOfLines={1}
                    style={[styles.scheduleMovieTextDetail, styles.movieType]}
                  >
                    {movieType}
                  </Text>
                </View>
                <View style={styles.availableSeatWrapper}>
                  <H2Eicon name="seat" size={scale(20)} color={Colors.success} />
                  <Text
                    numberOfLines={1}
                    style={[styles.scheduleMovieTextDetail, styles.availableSeat]}
                  >
                    {availableSeat}
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.bookTicket}>
                <H2Eicon name="book-ticket-outline" size={scale(35)} />
              </TouchableOpacity>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      );
    }
  }
