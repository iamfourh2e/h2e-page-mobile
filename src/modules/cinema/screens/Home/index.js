import React, { Component } from 'react';
import {
    Animated,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    View,
    RefreshControl,
    TouchableOpacity,
    Image
} from 'react-native';

import {
    Header,
    HeaderTitle,
    HeaderIcon,
    ListItems,
    HeaderContent,
    Button,
    IconButton
} from '@components';
import { Colors, Layout, Images } from "../../../../constants";
import Feather from 'react-native-vector-icons/Feather';
import { scale, verticalScale, moderateScale } from '../../../../libs/scaling';
import { styles } from './styles';

const HEADER_MAX_HEIGHT = verticalScale(200);
// const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_MIN_HEIGHT = verticalScale(65) + Layout.statusbarHeight;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const profileLogoHeight = verticalScale(60);

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(
                // iOS has negative initial scroll value because content inset...
                Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
            ),
            refreshing: false,
        };
    }

    _renderScrollViewContent(navigationProp) {
        const data = Array.from({ length: 30 });
        const scrollY = Animated.add(
            this.state.scrollY,
            Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
        );
        const titleScale = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0.7],
            extrapolate: 'clamp',
        });
        const animatedZindexProfile = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, -1],
            extrapolate: 'clamp',
        });
        return (
            <View style={styles.scrollViewContent}>
                <View style={styles.profileRow}>
                    <Animated.View style={[styles.profileLogoWrapper,
                    {
                        transform: [{ scale: titleScale }],
                    }
                    ]}>
                        <Animated.Image
                            source={{ uri: navigationProp.logo }}
                            style={[styles.profileLogo, {
                                width: profileLogoHeight,
                                height: profileLogoHeight,
                                transform: [{ scale: titleScale }],
                            }]}
                        />
                    </Animated.View>
                </View>
                {data.map((_, i) => (
                    <View key={i} style={styles.row}>
                        <Text>{i}</Text>
                    </View>
                ))}
            </View>
        );
    }

    render() {
        // Because of content inset the scroll value will be negative on iOS so bring
        // it back to 0.
        const scrollY = Animated.add(
            this.state.scrollY,
            Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
        );
        const headerTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE],
            extrapolate: 'clamp',
        });

        const imageOpacity = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0.4],
            extrapolate: 'clamp',
        });

        const imageTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 100],
            extrapolate: 'clamp',
        });

        const titleScale = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0.8],
            extrapolate: 'clamp',
        });
        const titleTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 0, -8],
            extrapolate: 'clamp',
        });
        const { navigation } = this.props;
        const {
            data = {
                logo: logo,
                companyName: companyName,
                description: description,
                rateValue: rateValue
            } } = navigation.state.params;
        return (
            <View style={styles.fill}>
                <Animated.ScrollView
                    style={styles.fill}
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                        { useNativeDriver: true },
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
                        top: HEADER_MAX_HEIGHT,
                    }}
                    contentOffset={{
                        y: -HEADER_MAX_HEIGHT,
                    }}
                >
                    {this._renderScrollViewContent(data)}
                </Animated.ScrollView>

                <Animated.View
                    pointerEvents="none"
                    style={[
                        styles.header,
                        { transform: [{ translateY: headerTranslate }] },
                    ]}
                >
                    <Animated.Image
                        style={[
                            styles.backgroundImage,
                            {
                                opacity: imageOpacity,
                                transform: [{ translateY: imageTranslate }],
                            },
                        ]}
                        source={{ uri: 'https://dohalife.com/wp-content/uploads/2016/03/Al-Khor%E2%80%99s-first-cinema-finally-open-to-the-public.jpg' }}
                    />
                </Animated.View>

                <Animated.View style={styles.bar}>
                    <Header
                        headerBackground='transparent'
                        barStyle='light-content'
                    >
                        <HeaderTitle title={data.companyName}>
                            <HeaderIcon>
                                <TouchableOpacity onPress={() => navigation.goBack(null)}>
                                    <Feather name='chevron-left' color={Colors.white(1)} size={scale(30)} />
                                </TouchableOpacity>
                            </HeaderIcon>
                        </HeaderTitle>
                    </Header>
                </Animated.View>
            </View>
        );
    }
}

// const styles = StyleSheet.create({

// });