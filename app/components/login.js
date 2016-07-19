import React, { Component } from 'react';
import { View, Text, Button, TouchableHighlight, Image, AsyncStorage } from 'react-native';
import { GoogleSignin, Constants, GoogleSigninButton } from 'react-native-google-signin';

export class Login extends Component {

  navMainSection() {
    this.props.navigator.push({
      id: 'main-section'
    })
  }

  setState(user) {

    AsyncStorage.setItem('@UserData:key', user)
      .then((re) => {
        console.log(re)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>

        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
        </View>

        <View style={{flex: 6, backgroundColor: 'skyblue'}}>

          <GoogleSigninButton
            style={{width: 48, height: 48}}
            size={GoogleSigninButton.Size.Icon}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.handleGoogleSignIn.bind(this)}/>

        </View>

        <View style={{flex: 1, backgroundColor: 'steelblue'}}>
        </View>

      </View>
    );
  }

  // Part of react lifecycle: https://facebook.github.io/react/docs/component-specs.html
  componentDidMount() {

    GoogleSignin.configure({
      scopes: [
        'email', 'profile', 'https://www.googleapis.com/auth/plus.profile.emails.read', 'https://www.googleapis.com/auth/plus.login'
      ],
      webClientId: "152106459338-0g2npu7m1eipe9166h9iik2dtmvonjii.apps.googleusercontent.com",
      offlineAccess: true // if you want to access Google API on behalf of the user FROM YOUR SERVER
    }).then(() => {
      GoogleSignin.currentUserAsync()
    });

    function userAlreadySignedIn(user) {
      console.log('USER', user);
      return user !== null;
    }

    GoogleSignin.currentUserAsync().then((user) => {

      if(userAlreadySignedIn(user)){
        this.setState({user: user});
        this.navMainSection();
      }

    }).done();
  }

  handleGoogleSignIn() {

    GoogleSignin.signIn()
      .then((user) => {

        this.setState({user: user});
        this.navMainSection();

      })
      .catch((err) => {

        console.log('SignIn error: ' + err.message);

        //todo: Hack to keep going to the map
        //this.navMainSection();

      });
  }
}