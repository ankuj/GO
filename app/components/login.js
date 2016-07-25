import React, { Component } from 'react';
import { View, Text, Button, TouchableHighlight, Image, AsyncStorage } from 'react-native';
import {GoogleSignin, GoogleSigninButton, Constants} from 'react-native-google-signin';

export class Login extends Component {

  constructor() {
    super();

    this.state = {
      user: null
    };

  }

  navMainSection() {
    console.log('time to fly!!');

    //that.props.navigator.push({
    //  id: 'main-section'
    //});

    this._navigator.push({
      id: 'main-section'
    });

  }

  //setState(user) {
  //
  //  AsyncStorage.setItem('@UserData:key', JSON.stringify(user))
  //    .then((re) => {
  //      console.log('Success storing user:' + re);
  //    })
  //    .catch((error) => {
  //      console.log('Error storing the key: ' + error);
  //    });
  //}

  render() {

    this._navigator = this.props.navigator;
    this._navMainSection = this.navMainSection;

    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
    		
      <View style={{flex: 1}}>

      <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}></View>
      <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}><Image source={require('./img/PokemonGO.png')} /></View>
      <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}></View>
        <View style={{flex: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
        <GoogleSigninButton
        style={{width: 200, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={this._signIn.bind(this)}/>


        </View>
 

      </View>
    );
  }

  //Part of react lifecycle:https://facebook.github.io/react/docs/component-specs.html
  componentDidMount() {

    GoogleSignin.configure({
      scopes: [
        'email', 'profile', 'https://www.googleapis.com/auth/plus.profile.emails.read', 'https://www.googleapis.com/auth/plus.login'
      ],
      webClientId: "152106459338-0g2npu7m1eipe9166h9iik2dtmvonjii.apps.googleusercontent.com",
      offlineAccess: false // if you want to access Google API on behalf of the user FROM YOUR SERVER
    }).then(() => {

      console.log('*** Google SignIn configuration complete.');

      GoogleSignin.currentUserAsync().then((user) => {

        console.log('*** The USER', user);
        if (user !== null) {


          if(this.navMainSection){

            console.log('You got it! REDIRECTING');
            this.navMainSection();

          } else{

            console.log('Nop... not there!');

          }
          //debugger;
          //this.setState({user: user});
          //this._navigator.push( {'id': 'main-section'} );
          //this._navigator.push( {'id': 'login'} );
        }

      }).done();

    });
  }

  _signIn() {

    console.log('I want:', this);
    GoogleSignin.signIn()
      .then((user) => {

        console.log('User authenticated ', user);
        console.log('I have:', this);

        if(this.navMainSection){

          console.log('You got it!');
          this.navMainSection();

        } else{

          console.log('Nop... not there!');

        }

      })
      .catch((err) => {

        console.log('SignIn Error: ' + err.toString());

        //todo: Hack to keep going to the map
        //this.navMainSection();

      }).done();
  }
}