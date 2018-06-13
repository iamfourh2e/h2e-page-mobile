import FirebaseConstants from "./FirebaseConstants";
import {Alert} from "react-native";

const API_URL = "https://fcm.googleapis.com/fcm/send";

class FirebaseClient {

  async send(body, type) {
    // if (FirebaseConstants.KEY === 'AAAAvbXXza4:APA91bEL1R6q6EgN0xSmAI_yMa9cJrQyeSLPysOAiEeinuwBHayoNQy84__v18SYO1VCQn2o4HpDjrXex6ctWqoG4k64C6yaFFj30xGkkJJKUdKoVxJw62MtVjGIAvcqtzFP0rzS7i4U') { //API_KEY
    //   Alert.alert('Set your API_KEY in app/FirebaseConstants.js')
    //   return;
    // }
    let headers = new Headers({
      "Content-Type": "application/json",
      "Authorization": "key=" + FirebaseConstants.KEY
    });

    try {
      let response = await fetch(API_URL, {method: "POST", headers, body});
      console.log(response);
      try {
        response = await response.json();
        if (!response.success) {
          Alert.alert('Failed to send notification, check error log')
        }
      } catch (err) {
        Alert.alert('Failed to send notification, check error log')
      }
    } catch (err) {
      Alert.alert(err && err.message)
    }
  }

}

let firebaseClient = new FirebaseClient();
export default firebaseClient;
