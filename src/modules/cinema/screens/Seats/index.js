import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  TouchableWithoutFeedback,
  Modal
} from "react-native";
import {
  Header,
  HeaderTitle,
  HeaderIcon,
  ListItems,
  HeaderContent,
  H2Eicon
} from "@components";
import { scale, verticalScale, moderateScale } from "../../../../libs/scaling";

import { Colors, Layout, Images } from "../../../../constants";
import Feather from "react-native-vector-icons/Feather";
import { styles } from "./styles";
import { data } from "./data.js";

export default class Seats extends Component {
  constructor(props) {
    super(props);
    this.perspective = new Animated.Value(1);
    this.rotateX = new Animated.Value(0);
    this.state = {
      modalVisible: false
    };
  }
  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.perspective, {
        toValue: 350,
        duration: 350,
        useNativeDriver: true
      }),
      Animated.timing(this.rotateX, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      })
    ]).start();
  }
  renderSeats() {
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    const { navigation } = this.props;
    const params = navigation.state.params;
    const { movieImage, movieTitle } = params;
    const backgroundColor = Colors.success;
    const headerTitle = "Choose Seats";
    const imageRotateX = this.rotateX.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "-60deg"]
    });
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.white(1)
        }}
      >
        <Header headerBackground={backgroundColor} barStyle="light-content">
          <HeaderTitle title={headerTitle}>
            <HeaderIcon>
              <TouchableOpacity onPress={() => navigation.goBack(null)}>
                <Feather
                  name="chevron-left"
                  color={Colors.white(1)}
                  size={scale(30)}
                />
              </TouchableOpacity>
            </HeaderIcon>
          </HeaderTitle>
        </Header>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.seatsContainer}>
            <Animated.View
              style={[
                {
                  height: 140,
                  width: "70%",
                  transform: [{ perspective: 350 }, { rotateX: imageRotateX }]
                }
              ]}
            >
              <Image
                borderRadius={10}
                source={{ uri: movieImage }}
                style={{
                  flex: 1
                }}
              />
            </Animated.View>
            <View style={styles.filterSeatsWrapper}>
              <BtnFilter text="Available" type="fill" />
              <BtnFilter text="Booked" />
            </View>
            <TouchableOpacity style={styles.seatsWrapper}>
              {this.renderSeats()}
            </TouchableOpacity>

            <Modal
              animationType="fade"
              duration={3000}
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                alert("Modal has been closed.");
              }}
              hardwareAccelerated={true}
            >
              <View style={{ flex: 1, backgroundColor: "red" }}>
                <View>
                  <Text>Hello World!</Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                  >
                    <Text>Hide Modal</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </View>
    );
  }
}

// BtnFilterSeats
export class BtnFilter extends Component {
  constructor(props) {
    super(props);
    this.animatedScaleBtn = new Animated.Value(1);
    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
  }
  handlePressIn() {
    Animated.spring(this.animatedScaleBtn, {
      toValue: 0.8
    }).start();
  }
  handlePressOut() {
    Animated.spring(this.animatedScaleBtn, {
      toValue: 1,
      friction: 3,
      tension: 40
    }).start();
  }
  render() {
    const animatedStyle = {
      scaleBtnFilter: {
        transform: [{ scale: this.animatedScaleBtn }]
      }
    };
    const { text, type } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
      >
        <Animated.View
          style={[
            styles.btnFilterSeat,
            animatedStyle.scaleBtnFilter,
            {
              backgroundColor: type == "fill" ? Colors.info : "transparent",
              borderColor: Colors.info,
              borderWidth: scale(1)
            }
          ]}
        >
          <Text
            style={{
              color: type == "fill" ? Colors.white(1) : Colors.info,
              fontSize: scale(14)
            }}
          >
            {text}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}
