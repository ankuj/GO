import React, { Component } from 'react';
import { View, Text, Button, TouchableHighlight, Image } from 'react-native';
import { GoogleSignin, Constants, GoogleSigninButton } from 'react-native-google-signin';
export class Login extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>

        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
          <Text> Pending... The login has to redirect to mainSection. </Text>
        </View>

        <View style={{flex: 6, backgroundColor: 'skyblue'}} >
          
          
          
        </View>

        <View style={{flex: 1, backgroundColor: 'steelblue'}} >

        </View>
        <GoogleSigninButton
        style={{width: 48, height: 48}}
        size={GoogleSigninButton.Size.Icon}
        color={GoogleSigninButton.Color.Dark}
        onPress={this.handleGoogleSignIn}/>
        		
        
        
      </View>
    );
  }
  componentDidMount(){
	  GoogleSignin.configure({
          scopes: [
              'email', 'profile', 'https://www.googleapis.com/auth/plus.profile.emails.read', 'https://www.googleapis.com/auth/plus.login'
          ],
          webClientId: "152106459338-0g2npu7m1eipe9166h9iik2dtmvonjii.apps.googleusercontent.com",
          offlineAccess: true // if you want to access Google API on behalf of the user FROM YOUR SERVER
      }).then(() => {
    	  GoogleSignin.currentUserAsync() 
      });
	  
	  GoogleSignin.currentUserAsync().then((user) => {
	      console.log('USER', user);
//	      this.setState({user: user});
	    }).done();  
	  
  }

  handleGoogleSignIn() {
	  
	  GoogleSignin.signIn()
	  .then((user) => {
	    console.log(user);
//	    this.setState({user: user});
	  })
	  .catch((err) => {
	    console.log(err.message);
	  });
	}
}