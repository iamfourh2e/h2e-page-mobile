import React, {Component} from 'react';
import {
  StyleSheet,
  NativeModules,
  View,
  Button
} from 'react-native';

import firebase from 'react-native-firebase';
import FBSDK, {LoginManager, AccessToken, LoginButton} from 'react-native-fbsdk';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

type Props = {};
export default class App extends Component<Props> {
  handleFacebookLogin = async () => {
    // Calling the following function will open the FB login dialogue:
    try {
      const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        throw new Error('User cancelled request'); // Handle this however fits the flow of your app
      }
      console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
      // get the access token
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
      }
      // create a new firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
      // login with credential
      const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
      console.info(JSON.stringify(currentUser.user.toJSON()))
    } catch (e) {
      console.error(e);
    }
  };

  handleGoogleLogin = async () => {
    GoogleSignin.hasPlayServices({autoResolve: true})
      .then(() => {
        // play services are available. can now configure library
      })
      .catch((err) => {
        console.log("Play services error", err.code, err.message);
      });
    try {
      // Add any configuration settings here:

      await GoogleSignin.configure();
      const data = await GoogleSignin.signIn();
      // create a new firebase credential with the token
      const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
      // login with credential
      const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);

      console.info(JSON.stringify(currentUser.user.toJSON()));
    } catch (e) {
      console.error(e);
    }
  };

  handleFacebookLogout = () => {
    LoginManager.logOut();
  };
  handleGoogleLogout = () => {
    GoogleSignin.signOut()
      .then(() => {
        console.log('out');
      })
      .catch((err) => {

      });

  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Button
          onPress={this.handleFacebookLogin}
          title="Continue with Facebook"
          color="#4267B2"
        />
        <Button
          onPress={this.handleFacebookLogout}
          title="Logout Facebook"
          color="#4267B2"
        />
        <GoogleSigninButton
          style={{width: 312, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={this.handleGoogleLogin}/>


        <LoginButton
          publishPermissions={["email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
        <Button
          onPress={this.handleGoogleLogout}
          title="Logout Google"
          color="#eee"
        />
      </View>
    )
  }
}
