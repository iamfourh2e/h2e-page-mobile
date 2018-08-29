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
import { ActionSheetCustom as ActionSheet } from "react-native-actionsheet";

import { Colors, Layout, Images } from "../../../../constants";
import Feather from "react-native-vector-icons/Feather";
import { styles } from "./styles";
import data from "./data.js";
const options = [
  "Cancel",
  <Text>A</Text>,
  <Text>B</Text>,
  <Text>C</Text>,
  <Text>D</Text>,
  <Text>E</Text>,
  <Text>F</Text>,
  <Text>G</Text>,
  <Text>H</Text>,
  <Text>I</Text>,
  <Text>J</Text>,
  <Text>K</Text>
];
export default class Seats extends Component {
  constructor(props) {
    super(props);
    this.perspective = new Animated.Value(1);
    this.rotateX = new Animated.Value(0);
    this.seatsRowOpactity = new Animated.Value(0);
    this.state = {
      modalVisible: false,
      filterRow: data
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
  showActionSheet = () => {
    this.ActionSheet.show();
  };
  renderSeatsRow() {
    return this.state.filterRow.map((obj, key) => {
      return (
        <TouchableOpacity key={key} style={styles.seatsRow}>
          {/* <View style={styles.seatsRow}> */}
          <View style={{ width: verticalScale(10), marginRight: scale(5) }}>
            <Text>{obj.row}</Text>
          </View>
          {obj.seats.map((o, k) => {
            return (
              <View key={k}>
                {o.num == 10 ? (
                  <View style={{ marginRight: scale(10) }}>
                    <SeatsNumber status={o.status} />
                  </View>
                ) : (
                  <SeatsNumber status={o.status} />
                )}
              </View>
            );
          })}
          {/* </View> */}
        </TouchableOpacity>
      );
    });
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
              <View>
                <Text onPress={this.showActionSheet}>Open ActionSheet</Text>
                <ActionSheet
                  ref={o => (this.ActionSheet = o)}
                  title={
                    <Text style={{ color: "#000", fontSize: 18 }}>
                      Choose Row
                    </Text>
                  }
                  options={options}
                  cancelButtonIndex={0}
                  destructiveButtonIndex={4}
                  onPress={index => {
                    if (index > 0) {
                      const row = options[index].props.children;
                      let filter = data.filter(o => {
                        return o.row === row;
                      });
                      if (filter.length > 0) {
                        this.setState({
                          filterRow: filter
                        });
                      }
                    } else {
                      this.setState({
                        filterRow: data
                      });
                    }
                  }}
                />
              </View>
            </View>
            <View style={styles.seatsWrapper}>{this.renderSeatsRow()}</View>
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

export class SeatsNumber extends React.Component {
  render() {
    const { status } = this.props;
    return (
      <View>
        <H2Eicon
          name="seat"
          color={status == "booked" ? Colors.info : Colors.grey}
          size={scale(15)}
        />
      </View>
    );
  }
}

// export class ChooseRowActionSheet extends React.Component {
//   showActionSheet = () => {
//     this.ActionSheet.show();
//   };
//   render() {
//     return (
//       <View>
//         <Text onPress={this.showActionSheet}>Open ActionSheet</Text>
//         <ActionSheet
//           ref={o => (this.ActionSheet = o)}
//           title={
//             <Text style={{ color: "#000", fontSize: 18 }}>Choose Row</Text>
//           }
//           options={options}
//           cancelButtonIndex={0}
//           destructiveButtonIndex={4}
//           onPress={index => {
//             const row = options[index].props.children;
//             filterRow = data.filter(o => {
//               return o.row === row;
//             });
//             if (filter.length > 0) {
//               this.setState({
//                 filterRow: filter
//               });
//             }
//           }}
//         />
//       </View>
//     );
//   }
// }
