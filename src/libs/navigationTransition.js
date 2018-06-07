import {Animated, Easing, I18nManager} from "react-native";

function forInitial(props) {
  const {navigation, scene} = props;

  const focused = navigation.state.index === scene.index;
  const opacity = focused ? 1 : 0;
  // If not focused, move the scene far away.
  const translate = focused ? 0 : 1000000;
  return {
    opacity,
    transform: [{translateX: translate}, {translateY: translate}],
  };
}

function forHorizontal(props) {
  const {layout, position, scene} = props;

  if (!layout.isMeasured) {
    return forInitial(props);
  }

  const index = scene.index;
  const inputRange = [index - 1, index, index + 1];

  const width = layout.initWidth;
  const outputRange = I18nManager.isRTL ?
    ([-width, 0, width * 0.3]) : Array() ?
      ([width, 0, width * -0.3]) : Array();

  // Add [index - 1, index - 0.99] to the interpolated opacity for screen transition.
  // This makes the screen's shadow to disappear smoothly.
  const opacity = position.interpolate({
    inputRange: [
      index - 1,
      index - 0.99,
      index,
      index + 0.99,
      index + 1,
    ],
    outputRange: [0, 1, 1, 1, 0],
  });

  const translateY = 0;
  const translateX = position.interpolate({
    inputRange,
    outputRange,
  });

  return {
    opacity,
    transform: [{translateX}, {translateY}],
  };
}

export const slideLeftToRightTransition = {
  transitionSpec: {
    duration: 500,
    easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
    timing: Animated.timing,
  },
  screenInterpolator: forHorizontal,
};


export const slideBottomToTopTransition = {
  transitionSpec: {
    duration: 300,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
  },
  screenInterpolator: sceneProps => {
    const {layout, position, scene} = sceneProps;
    const {index} = scene;

    const height = layout.initHeight;
    const translateY = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [height, 0, 0],
    });

    const opacity = position.interpolate({
      inputRange: [index - 1, index - 0.99, index],
      outputRange: [0, 1, 1],
    });

    return {opacity, transform: [{translateY}]};
  }
};