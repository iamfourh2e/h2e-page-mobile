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
    TouchableWithoutFeedback,
    Image
} from 'react-native';

import {
    Header,
    HeaderTitle,
    HeaderIcon,
    ListItems,
    HeaderContent,
    Button,
    IconButton,
    SnapCarousel,
    H2Eicon
} from '@components';
import { Colors, Layout, Images } from "../../../../constants";
import Feather from 'react-native-vector-icons/Feather';
import { scale, verticalScale, moderateScale } from '../../../../libs/scaling';
import { styles } from './styles';

const HEADER_MAX_HEIGHT = verticalScale(200);
// const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_MIN_HEIGHT = verticalScale(65) + Layout.statusbarHeight;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const profileLogoHeight = verticalScale(100);

const showingData = [
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
    }
];

const comingData = [
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmUQEFntJpx_oPQ7dh9vnfkwzlBYZpNIJNkAICwD_WcPpN5XROw'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://free4kwallpaper.com/wp-content/uploads/2017/04/Fast-and-Furious-8-Movie-4k-wallpaper-640x480.jpg'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://c.tribune.com.pk/2017/11/1571372-marvel-1511935004-305-640x480.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://images.amcnetworks.com/ifc.com/wp-content/uploads/2011/11/111711-avengers-banners.jpg'
    }
];

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
        const profileScale = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0.7],
            extrapolate: 'clamp',
        });
        const profileTranslateY = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, -verticalScale(30)],
            extrapolate: 'clamp',
        });
        const translateX = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, -(Layout.window.width / 1.3)],
            extrapolate: 'clamp',
        });
        const translateY = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, verticalScale(90)],
            extrapolate: 'clamp',
        });
        const { logo, rateValue } = navigationProp;

        // const animatedStyle = {
        //     animatedShowing: {
        //         fontSize: this.state.scaleShowingTime,
        //         color: this.state.showing ? Colors.black(1) : Colors.lightGrey
        //     },
        //     animatedComing: {
        //         fontSize: this.state.scaleComingTime,
        //         color: this.state.coming ? Colors.black(1) : Colors.lightGrey
        //     }
        // }
        return (
            <View style={styles.scrollViewContent}>
                <View style={styles.profileRow}>
                    <View style={styles.profileLogoWrapper}>
                        <Animated.Image
                            source={{ uri: logo }}
                            style={[styles.profileLogo, {
                                width: profileLogoHeight,
                                height: profileLogoHeight,
                                resizeMode: 'contain',
                                transform: [
                                    { scale: profileScale },
                                    { translateY: profileTranslateY }
                                ],
                            }]}
                        />
                    </View>
                    <Animated.View style={{ flex: 2.5, transform: [{ translateX: translateX }] }}>
                        <Animated.View style={[styles.followMessageRateWrapper, {
                            transform: [{ translateX: translateX }],
                        }]}>

                            {/* profile */}
                            <View style={[styles.followMessageWrapper]}>
                                <View style={styles.column}>
                                    <TouchableOpacity style={styles.rateWrapper}>
                                        <Text style={styles.rateValue}>{rateValue}</Text>
                                        <Feather name='star' color={Colors.lightYellow} size={scale(18)} />
                                    </TouchableOpacity>
                                </View>
                                <IconButton
                                    background={Colors.info}
                                    outline
                                    rounded
                                    iconComponent="Feather"
                                    iconName="message-circle"
                                    onPress={() => {
                                    }}
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
                                    onPress={() => {
                                    }}
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
                                <View style={[styles.column,]}>
                                    <Text style={styles.title}>Follower</Text>
                                    <Text style={styles.value}>203</Text>
                                </View>
                            </View>
                        </View>
                    </Animated.View>
                </View>

                {/* Time */}
                <View>
                    <ShowTime
                        showingData={showingData}
                        comingData={comingData}
                    />
                    <MovieSchedule />
                </View>
            </View >
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
                    showsVerticalScrollIndicator={false}
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

// ShowTime
export class ShowTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scaleShowingTime: new Animated.Value(scale(18)),
            scaleComingTime: new Animated.Value(scale(18)),
            showing: false,
            coming: false,
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
        ]).start()
    }
    showing = () => {
        this.setState({ showing: true, coming: false });
        this.animatedScaleTimeTitle(scale(23), scale(18));
    }
    coming = () => {
        this.setState({ coming: true, showing: false });
        this.animatedScaleTimeTitle(scale(18), scale(23));
    }
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
                        <Animated.Text style={{
                            color: this.state.showing ? Colors.black(1) : Colors.lightGrey,
                            fontSize: this.state.showing ? scale(23) : scale(18)
                        }}>Showing</Animated.Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.coming()}
                        style={styles.showTimeTitleCenter}
                    >
                        <Animated.Text style={{
                            color: this.state.coming ? Colors.black(1) : Colors.lightGrey,
                            fontSize: this.state.coming ? scale(23) : scale(18)
                        }}>Coming</Animated.Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: scale(11) }}>
                    {this.state.showing && <SnapCarousel
                        data={showingData}
                        autoplay={true}
                    />}
                    {this.state.coming && <SnapCarousel
                        data={comingData}
                        autoplay={true}
                    />}
                </View>
            </View>
        )
    }
}

export class MovieSchedule extends React.Component {
    render() {
        const data = [
            {
                day: 'Wednesday',
                date: '18/07/2018',
                schedule: [
                    {
                        movieTitle: 'HOTEL TRANSYLVANIA 3 HOTEL TRANSYLVANIA 3',
                        movieTime: '09:30 AM',
                        movieDuration: '1h 38mn',
                        movieType: 'Animation, Comedy,Animation, Comedy',
                        availableSeat: 50,
                        image: 'https://www.cinecolombia.com/sites/default/files/hoteltransilvania.jpg'
                    },
                    {
                        movieTitle: 'HOTEL TRANSYLVANIA 3',
                        movieTime: '11:30 AM',
                        movieDuration: '1h 38mn',
                        movieType: 'Animation, Comedy',
                        availableSeat: 50,
                        image: 'https://www.cinecolombia.com/sites/default/files/hoteltransilvania.jpg'
                    },
                    {
                        movieTitle: 'អ្នកចម្បាំងញិកញ៉ក់',
                        movieTime: '02:00 AM',
                        movieDuration: '2h 08mn',
                        movieType: 'Action, Comedy',
                        availableSeat: 50,
                        image: 'https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/36660706_1022516091256592_7917065752480317440_n.jpg?_nc_cat=0&oh=b1a259f95aa456d669bf8249a9f80987&oe=5BC5E230'
                    },
                    {
                        movieTitle: 'SKYSCRAPER',
                        movieTime: '04:30 PM',
                        movieDuration: '1h 43mn',
                        movieType: 'Action',
                        availableSeat: 100,
                        image: 'https://resizing.flixster.com/Cu7a8TJbwBCy3b8A0Fzs-xWFKog=/300x300/v1.bTsxMjcyMTE2ODtqOzE3Nzg3OzEyMDA7NDgwOzc2MA'
                    },
                    {
                        movieTitle: 'SKYSCRAPER',
                        movieTime: '07:00 PM',
                        movieDuration: '1h 43mn',
                        movieType: 'Action',
                        availableSeat: 100,
                        image: 'https://resizing.flixster.com/Cu7a8TJbwBCy3b8A0Fzs-xWFKog=/300x300/v1.bTsxMjcyMTE2ODtqOzE3Nzg3OzEyMDA7NDgwOzc2MA'
                    },
                ]
            },
            {
                day: 'Thursday',
                date: '19/07/2018',
                schedule: [
                    {
                        movieTitle: 'HOTEL TRANSYLVANIA 3',
                        movieTime: '09:30 AM',
                        movieDuration: '1h 38mn',
                        movieType: 'Animation, Comedy',
                        availableSeat: 50,
                        image: 'https://www.cinecolombia.com/sites/default/files/hoteltransilvania.jpg'
                    },
                    {
                        movieTitle: 'អ្នកចម្បាំងញិកញ៉ក់',
                        movieTime: '11:30 AM',
                        movieDuration: '2h 08mn',
                        movieType: 'Action, Comedy',
                        availableSeat: 50,
                        image: 'https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/36660706_1022516091256592_7917065752480317440_n.jpg?_nc_cat=0&oh=b1a259f95aa456d669bf8249a9f80987&oe=5BC5E230'
                    },
                    {
                        movieTitle: 'HOTEL TRANSYLVANIA 3',
                        movieTime: '02:00 AM',
                        movieDuration: '1h 38mn',
                        movieType: 'Animation, Comedy',
                        availableSeat: 50,
                        image: 'https://www.cinecolombia.com/sites/default/files/hoteltransilvania.jpg'
                    },
                    {
                        movieTitle: 'SKYSCRAPER',
                        movieTime: '04:30 PM',
                        movieDuration: '1h 43mn',
                        movieType: 'Action',
                        availableSeat: 100,
                        image: 'https://resizing.flixster.com/Cu7a8TJbwBCy3b8A0Fzs-xWFKog=/300x300/v1.bTsxMjcyMTE2ODtqOzE3Nzg3OzEyMDA7NDgwOzc2MA'
                    },
                    {
                        movieTitle: 'SKYSCRAPER',
                        movieTime: '07:00 PM',
                        movieDuration: '1h 43mn',
                        movieType: 'Action',
                        availableSeat: 100,
                        image: 'https://resizing.flixster.com/Cu7a8TJbwBCy3b8A0Fzs-xWFKog=/300x300/v1.bTsxMjcyMTE2ODtqOzE3Nzg3OzEyMDA7NDgwOzc2MA'
                    },
                ]
            },
        ]
        return (
            <View style={styles.scheduleWrapper}>
                {data.map((o, k) => {
                    return (
                        <View key={k}>
                            <View style={styles.scheduleHeader}>
                                <Text style={styles.scheduleHeaderTitle}>{o.day}</Text>
                                <Text style={styles.scheduleHeaderSubTitle}>{o.date}</Text>
                            </View>
                            {o.schedule.map((data, key) => {
                                return (
                                    <SecheduleList
                                        key={key}
                                        movieTitle={data.movieTitle}
                                        movieTime={data.movieTime}
                                        movieDuration={data.movieDuration}
                                        movieType={data.movieType}
                                        availableSeat={data.availableSeat}
                                        movieImage={data.image}
                                    />
                                );
                            })}
                        </View>
                    );
                })}

            </View>
        );
    }
}

// ScheduleList
export class SecheduleList extends React.Component {
    constructor(props) {
        super(props);
        this.animatedScaleBtn = new Animated.Value(1);
        this.handlePressIn = this.handlePressIn.bind(this);
        this.handlePressOut = this.handlePressOut.bind(this);
    }
    handlePressIn() {
        Animated.spring(this.animatedScaleBtn, {
            toValue: .9
        }).start();
    }
    handlePressOut() {
        Animated.spring(this.animatedScaleBtn, {
            toValue: 1,
            friction: 3,
            tension: 40
        }).start();
        // setTimeout(() => {
        //     this._signInAsync();
        // }, 1000);
    }
    render() {
        const animatedStyle = {
            scaleLoginBtn: {
                transform: [
                    { scale: this.animatedScaleBtn }
                ]
            }
        }
        const { movieTitle, movieTime, movieDuration, movieType, availableSeat, movieImage } = this.props;
        return (
            <TouchableWithoutFeedback
                onPressIn={this.handlePressIn}
                onPressOut={this.handlePressOut}
            >
                <Animated.View style={[styles.scheduleRowList, animatedStyle.scaleLoginBtn]}>

                    {/* image */}
                    <View style={styles.scheduleImageWrapper}>
                        <Image
                            style={styles.scheduleImage}
                            source={{ uri: movieImage }}
                        />
                    </View>

                    {/* Movie Title */}
                    <View style={styles.scheduleMovieTitleWrapper}>
                        <Text
                            numberOfLines={1}
                            style={styles.scheduleMovieTitle}
                        >
                            {movieTitle}
                        </Text>
                    </View>
                    {/* detail */}
                    <View style={styles.scheduleMovieDetailWrapper}>
                        <Text numberOfLines={1} style={[styles.scheduleMovieTextDetail, styles.movieTime]}>{movieTime}</Text>
                        <Text numberOfLines={1} style={[styles.scheduleMovieTextDetail, styles.movieDuration]}>Duration : {movieDuration}</Text>
                        <View style={{ flex: 1, width: '90%' }}>
                            <Text numberOfLines={1} style={[styles.scheduleMovieTextDetail, styles.movieType]}>{movieType}</Text>
                        </View>
                        <View style={styles.availableSeatWrapper}>
                            <H2Eicon name='seat' size={scale(20)} color={Colors.success} />
                            <Text numberOfLines={1} style={[styles.scheduleMovieTextDetail, styles.availableSeat]}>{availableSeat}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.bookTicket}>
                        <H2Eicon name='book-ticket-outline' size={scale(35)} />
                    </TouchableOpacity>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}