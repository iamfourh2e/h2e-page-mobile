import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
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
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: true,
            coming: false
        };
    }
    showing = () => {
        this.setState({ showing: true, coming: false });
    }
    coming = () => {
        this.setState({ coming: true, showing: false })
    }
    render() {
        const { navigation } = this.props;
        const backgroundColor = Colors.black(.5);
        const {
            data: {
                logo: logo,
                companyName: companyName,
                description: description,
                rateValue: rateValue
            },
            type: headerTitle } = navigation.state.params;
        // companyName: headerTitle, logo: logo
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Header
                    headerBackground={backgroundColor}
                    barStyle="dark-content"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        marginTop: Layout.statusbarHeight,
                        overflow: 'hidden',
                    }}
                >
                    <HeaderTitle
                        title={companyName}
                        titleColor={Colors.white(1)}
                    >
                        <HeaderIcon>
                            <TouchableOpacity onPress={() => navigation.goBack(null)}>
                                <Feather name='chevron-left' color={Colors.white(1)} size={scale(30)} />
                            </TouchableOpacity>
                        </HeaderIcon>
                    </HeaderTitle>
                </Header>
                <ScrollView style={{
                    zIndex: -1,
                    // position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    paddingTop: 60,
                    flex: 1
                }}>
                    <View style={styles.coverWrapper}>
                        <Image
                            style={{ height: verticalScale(200) }}
                            source={{ uri: 'https://images2.persgroep.net/rcs/C94d5YvOXDBmbxTD10MY1u6ZlgA/diocontent/122489084/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.9' }}
                        />
                    </View>
                </ScrollView>





                <View style={styles.profileRow}>
                    <View style={styles.profileLogoWrapper}>
                        <Image
                            source={{ uri: logo }}
                            style={styles.profileLogo}
                        />
                    </View>
                    <View style={styles.followMessageRateWrapper}>
                        <View style={styles.rateWrapper}>
                            <Text style={styles.rateValue}>{rateValue}</Text>
                            <Feather name='star' color={Colors.lightYellow} size={scale(18)} />
                        </View>
                        <View style={styles.followMessageWrapper}>
                            <IconButton
                                background={Colors.info}
                                outline
                                rounded
                                iconComponent="Feather"
                                iconName="message-circle"
                                onPress={() => {
                                }}
                                size={30}
                                style={{ alignSelf: 'flex-start' }}
                            />
                            <Button
                                background={Colors.info}
                                outline
                                rounded
                                height={verticalScale(30)}
                                width={verticalScale(100)}
                                title="Follow"
                                fontSize={scale(14)}
                                color={Colors.info}
                                onPress={() => {
                                }}
                                style={{ alignSelf: 'flex-end', marginRight: scale(11) }}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.postFollowingFollowWrapper}>
                    <View style={styles.column}>
                        <Text style={styles.title}>Post</Text>
                        <Text style={styles.value}>205</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.title}>Following</Text>
                        <Text style={styles.value}>116</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.title}>Follower</Text>
                        <Text style={styles.value}>203</Text>
                    </View>
                </View>



                <View style={styles.content}>
                    {/* <View style={styles.contentWrapper}>
                            <View style={styles.companyWrapper}>
                                <View style={styles.logoWrapper}>
                                    <Image source={{ uri: logo }} style={styles.logo} />
                                </View>
                                <View style={styles.titleWapper}>
                                    <Text style={styles.mainTitle}>{companyName}</Text>
                                    <Text style={styles.subTitle}>{description}</Text>
                                    <View style={styles.rate}>
                                        <Text style={styles.rateValue}>{rateValue}</Text>
                                        <Feather name='star' color={Colors.lightYellow} size={scale(18)} />
                                    </View>
                                </View>
                            </View>
                        </View> */}
                </View>



                {/* <View style={{
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity
                        onPress={() => this.showing()}
                        style={{
                            height: 30,
                            marginRight: 30
                        }}
                    >
                        <Text
                            style={{
                                color: this.state.showing ? 'red' : 'black',
                                fontSize: this.state.showing ? 25 : 14
                            }}
                        >Showing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.coming()}
                    >
                        <Text
                            style={{
                                color: this.state.coming ? 'red' : 'black',
                                fontSize: this.state.coming ? 25 : 14
                            }}
                        >Coming</Text>
                    </TouchableOpacity>
                </View>
                {this.state.showing && <Showing />}
                {this.state.coming && <Coming />} */}

            </View >
        );
    }
}

export class Showing extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20
            }}>
                <View style={{
                    width: 150,
                    height: 150,
                    backgroundColor: 'red',
                    marginRight: 20
                }} />
                <View style={{
                    width: 150,
                    height: 150,
                    backgroundColor: 'green'
                }} />
            </View>
        );
    }
}

export class Coming extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20
            }}>
                <View style={{
                    width: 150,
                    height: 150,
                    backgroundColor: 'yellow',
                    marginRight: 20
                }} />
                <View style={{
                    width: 150,
                    height: 150,
                    backgroundColor: 'blue'
                }} />
            </View>
        );
    }
}