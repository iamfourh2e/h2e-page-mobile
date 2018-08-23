import React,{Component} from 'react';
import {
    View,
    Image,
    Text
}from 'react-native';
import { styles } from "./styles";
export default class Seats extends Component{
    render(){
        const {navigation} = this.props;
        console.log(navigation.state)
        return(
            <View style={styles.seatsContainer}>
                <Text>Seats</Text>
            </View>
        )
    }
}