import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavBar } from './navbar/navbar'
import { Map } from './map/map'

export class MainSection extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>

        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
          <NavBar/>
        </View>

        <View style={{flex: 6, backgroundColor: 'skyblue'}} >
          <Map/>
        </View>

        <View style={{flex: 3, backgroundColor: 'steelblue'}} >
          <Text>Chat!Chat!Chat!</Text>
        </View>

      </View>
    );
  }
}