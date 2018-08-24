import React, { Component } from "react";
import {
  Animated,
  Platform,
  Text,
  View,
  RefreshControl,
  TouchableOpacity
} from "react-native";

import {
  Header,
  HeaderTitle,
  HeaderIcon,
  Button,
  IconButton
} from "@components";

import { Colors, Layout, Images } from "../../../../constants";
import Feather from "react-native-vector-icons/Feather";
import { scale, verticalScale, moderateScale } from "../../../../libs/scaling";
import { styles } from "./styles";
import ShowTime from './ShowTime';
import MovieSchedule from './MovieSchedule';

const HEADER_MAX_HEIGHT = verticalScale(200);
// const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_MIN_HEIGHT = verticalScale(65) + Layout.statusbarHeight;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const profileLogoHeight = verticalScale(100);

const showingData = [
  {
    title: "White Pocket Sunset",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    illustration: "https://i.imgur.com/MABUbpDl.jpg"
  },
  {
    title: "Acrocorinth, Greece",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/KZsmUi2l.jpg"
  },
  {
    title: "The lone tree, majestic landscape of New Zealand",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/2nCt3Sbl.jpg"
  },
  {
    title: "Middle Earth, Germany",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/lceHsT6l.jpg"
  }
];

const comingData = [
  {
    title: "White Pocket Sunset",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    illustration:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmUQEFntJpx_oPQ7dh9vnfkwzlBYZpNIJNkAICwD_WcPpN5XROw"
  },
  {
    title: "Acrocorinth, Greece",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration:
      "https://free4kwallpaper.com/wp-content/uploads/2017/04/Fast-and-Furious-8-Movie-4k-wallpaper-640x480.jpg"
  },
  {
    title: "The lone tree, majestic landscape of New Zealand",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "https://c.tribune.com.pk/2017/11/1571372-marvel-1511935004-305-640x480.jpg"
  },
  {
    title: "Middle Earth, Germany",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "https://images.amcnetworks.com/ifc.com/wp-content/uploads/2011/11/111711-avengers-banners.jpg"
  }
];

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        Platform.OS === "ios" ? -HEADER_MAX_HEIGHT : 0
      ),
      refreshing: false
    };
  }

  _renderScrollViewContent(navigationProp,navigation) {
    const data = Array.from({ length: 30 });
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === "ios" ? HEADER_MAX_HEIGHT : 0
    );
    const profileScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.7],
      extrapolate: "clamp"
    });
    const profileTranslateY = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, -verticalScale(30)],
      extrapolate: "clamp"
    });
    const translateX = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, -(Layout.window.width / 1.3)],
      extrapolate: "clamp"
    });
    const translateY = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, verticalScale(90)],
      extrapolate: "clamp"
    });
    const { logo, rateValue } = navigationProp;
    return (
      <View style={styles.scrollViewContent}>
        <View style={styles.profileRow}>
          <View style={styles.profileLogoWrapper}>
            <Animated.Image
              source={{ uri: logo }}
              style={[
                styles.profileLogo,
                {
                  width: profileLogoHeight,
                  height: profileLogoHeight,
                  resizeMode: "contain",
                  transform: [
                    { scale: profileScale },
                    { translateY: profileTranslateY }
                  ]
                }
              ]}
            />
          </View>
          <Animated.View
            style={{ flex: 2.5, transform: [{ translateX: translateX }] }}
          >
            <Animated.View
              style={[
                styles.followMessageRateWrapper,
                {
                  transform: [{ translateX: translateX }]
                }
              ]}
            >
              {/* profile */}
              <View style={[styles.followMessageWrapper]}>
                <View style={styles.column}>
                  <TouchableOpacity style={styles.rateWrapper}>
                    <Text style={styles.rateValue}>{rateValue}</Text>
                    <Feather
                      name="star"
                      color={Colors.lightYellow}
                      size={scale(18)}
                    />
                  </TouchableOpacity>
                </View>
                <IconButton
                  background={Colors.info}
                  outline
                  rounded
                  iconComponent="Feather"
                  iconName="message-circle"
                  onPress={() => {}}
                  size={30}
                />
                <Button
                  background={Colors.info}
                  outline
                  rounded
                  height={verticalScale(30)}
                  width={verticalScale(80)}
                  title="Follow"
                  fontSize={scale(12)}
                  color={Colors.info}
                  onPress={() => {}}
                />
              </View>
            </Animated.View>

            {/* Rate_Following_Follower */}
            <View style={styles.followMessageRateWrapper}>
              <View style={[styles.followMessageWrapper]}>
                <View style={styles.column}>
                  <Text style={styles.title}>Post</Text>
                  <Text style={styles.value}>205</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.title}>Following</Text>
                  <Text style={styles.value}>116</Text>
                </View>
                <View style={[styles.column]}>
                  <Text style={styles.title}>Follower</Text>
                  <Text style={styles.value}>203</Text>
                </View>
              </View>
            </View>
          </Animated.View>
        </View>

        {/* Time */}
        <View>
          {/* <ShowTime showingData={showingData} comingData={comingData} /> */}
          <MovieSchedule navigation={navigation}/>
        </View>
      </View>
    );
  }

  render() {
    // Because of content inset the scroll value will be negative on iOS so bring
    // it back to 0.
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === "ios" ? HEADER_MAX_HEIGHT : 0
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: "clamp"
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.4],
      extrapolate: "clamp"
    });

    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: "clamp"
    });

    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: "clamp"
    });
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: "clamp"
    });
    const { navigation } = this.props;
    const {
      data = {
        logo: logo,
        companyName: companyName,
        description: description,
        rateValue: rateValue,
      }
    } = navigation.state.params;
    return (
      <View style={styles.fill}>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true }
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => this.setState({ refreshing: false }), 1000);
              }}
              // Android offset for RefreshControl
              progressViewOffset={HEADER_MAX_HEIGHT}
            />
          }
          // iOS offset for RefreshControl
          contentInset={{
            top: HEADER_MAX_HEIGHT
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT
          }}
        >
          {this._renderScrollViewContent(data,navigation)}
        </Animated.ScrollView>

        <Animated.View
          pointerEvents="none"
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }] }
          ]}
        >
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }]
              }
            ]}
            source={{
              uri:
                "https://dohalife.com/wp-content/uploads/2016/03/Al-Khor%E2%80%99s-first-cinema-finally-open-to-the-public.jpg"
            }}
          />
        </Animated.View>

        <Animated.View style={styles.bar}>
          <Header headerBackground="transparent" barStyle="light-content">
            <HeaderTitle title={data.companyName}>
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
        </Animated.View>
      </View>
    );
  }
}

// ====================================================
// ShowTime

// ====================================================
// MovieSchedule


// =====================================================================
// ScheduleList

