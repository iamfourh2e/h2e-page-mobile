import React from "react";
import {
  View,
  Text
} from "react-native";
import {
    SnapCarousel
  } from "@components";

import { Colors, Layout, Images } from "../../../../constants";
import Feather from "react-native-vector-icons/Feather";
import { scale, verticalScale, moderateScale } from "../../../../libs/scaling";
import { styles } from "./styles";
import SecheduleList from './SecheduleList';

export default class MovieSchedule extends React.Component {
    render() {
      const data = [
        {
          day: "Wednesday",
          date: "18/07/2018",
          schedule: [
            {
              movieTitle: "Along with the Gods: The Last 49 Days",
              movieTime: "09:30 AM",
              movieDuration: "1h 38mn",
              movieType: "Animation, Comedy,Animation, Comedy",
              availableSeat: 50,
              image:
                "https://i.ytimg.com/vi/qn6_N8uEEgM/hqdefault.jpg"
            },
            {
              movieTitle: "ALPHA",
              movieTime: "11:30 AM",
              movieDuration: "1h 38mn",
              movieType: "Animation, Comedy",
              availableSeat: 50,
              image:
                "https://i.ytimg.com/vi/DUvIyz1XHU8/maxresdefault.jpg"
            },
            {
              movieTitle: "Slender Man (2018)",
              movieTime: "02:00 AM",
              movieDuration: "2h 08mn",
              movieType: "Action, Comedy",
              availableSeat: 50,
              image:
                "https://i2.wp.com/berkreviews.com/wp-content/uploads/2018/08/maxresdefault.png?fit=1280%2C640"
            },
            {
              movieTitle: "Aquaman",
              movieTime: "04:30 PM",
              movieDuration: "1h 43mn",
              movieType: "Action",
              availableSeat: 100,
              image:
                "https://pmcdeadline2.files.wordpress.com/2016/03/aquaman.jpg?w=446&h=299&crop=1"
            },
            {
              movieTitle: "Venom",
              movieTime: "07:00 PM",
              movieDuration: "1h 43mn",
              movieType: "Action",
              availableSeat: 100,
              image:
                "https://www.itncart.com/wp-content/uploads/2018/06/Venom-Poster.jpg"
            }
          ]
        },
        {
          day: "Thursday",
          date: "19/07/2018",
          schedule: [
            {
              movieTitle: "Along with the Gods: The Last 49 Days",
              movieTime: "09:30 AM",
              movieDuration: "1h 38mn",
              movieType: "Animation, Comedy,Animation, Comedy",
              availableSeat: 50,
              image:
                "https://i.ytimg.com/vi/qn6_N8uEEgM/hqdefault.jpg"
            },
            {
              movieTitle: "ALPHA",
              movieTime: "11:30 AM",
              movieDuration: "1h 38mn",
              movieType: "Animation, Comedy",
              availableSeat: 50,
              image:
                "https://i.ytimg.com/vi/DUvIyz1XHU8/maxresdefault.jpg"
            },
            {
              movieTitle: "Slender Man (2018)",
              movieTime: "02:00 AM",
              movieDuration: "2h 08mn",
              movieType: "Action, Comedy",
              availableSeat: 50,
              image:
                "https://i2.wp.com/berkreviews.com/wp-content/uploads/2018/08/maxresdefault.png?fit=1280%2C640"
            },
            {
              movieTitle: "Aquaman",
              movieTime: "04:30 PM",
              movieDuration: "1h 43mn",
              movieType: "Action",
              availableSeat: 100,
              image:
                "https://pmcdeadline2.files.wordpress.com/2016/03/aquaman.jpg?w=446&h=299&crop=1"
            },
            {
              movieTitle: "Venom",
              movieTime: "07:00 PM",
              movieDuration: "1h 43mn",
              movieType: "Action",
              availableSeat: 100,
              image:
                "https://www.itncart.com/wp-content/uploads/2018/06/Venom-Poster.jpg"
            }
          ]
        }
      ];
      console.log(this.props)
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
                      index={key}
                      movieTitle={data.movieTitle}
                      movieTime={data.movieTime}
                      movieDuration={data.movieDuration}
                      movieType={data.movieType}
                      availableSeat={data.availableSeat}
                      movieImage={data.image}
                      navigation={this.props.navigation}
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
