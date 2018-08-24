import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  ImageBackground
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

export default class Seats extends Component {
  constructor(props) {
    super(props);
    this.perspective = new Animated.Value(1);
    this.rotateX = new Animated.Value(0);
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
    const seats = [];
    for (let col = 1; col <= 20; col++) {
      seats.push({
        num: col
      });
    }
    return seats.map((data, k) => {
      return (
        <TouchableOpacity key={k} style={styles.seatsRow}>
          <H2Eicon
            name="seat"
            color={Colors.lightGrey}
            size={verticalScale(35)}
          />
          <Text>{data.num}</Text>
        </TouchableOpacity>
      );
    });
  }
  renderRowSeats(val) {
    return (
      <View style={{ flex: 1, flexDirection: "row", marginBottom: scale(10) }}>
        <View
          style={{
            width: verticalScale(30),
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: Colors.info }}>{val}</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            {this.renderSeats()}
          </View>
        </ScrollView>
      </View>
    );
  }
  render() {
    const { navigation } = this.props;
    const params = navigation.state.params;
    const {movieImage,movieTitle} = params;
    const backgroundColor = Colors.success;
    const headerTitle = "Choose Seats";
    const imageRotateX = this.rotateX.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "-60deg"]
    });
    console.log(params)
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
          <View style={{ alignItems: "center" }}>
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
            <Text style={{fontSize:scale(18)}}>{movieTitle}</Text>
            <View style={styles.seatsContainer}>
              {this.renderRowSeats("A")}
              {/* {this.renderRowSeats("B")}
              {this.renderRowSeats("C")}
              {this.renderRowSeats("D")}
              {this.renderRowSeats("E")}
              {this.renderRowSeats("F")}
              {this.renderRowSeats("G")} */}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
