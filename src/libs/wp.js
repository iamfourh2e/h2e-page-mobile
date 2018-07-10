import { StyleSheet, Dimensions, Platform } from 'react-native';
const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}