import React, { Component } from 'react';
import { View, Text } from 'react-native';

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
          <Text> Login button goes here. </Text>
        </View>

        <View style={{flex: 1, backgroundColor: 'steelblue'}} >

        </View>

      </View>
    );
  }
}