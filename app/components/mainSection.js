import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavBar } from './navbar/navbar'
import { Map } from './map/map'
import { MobAds } from './ads/mobAds'

export class MainSection extends Component {

  render() {

    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>

        <View style={{flex: 7}} >
          <Map/>
        </View>

        <MobAds/>

      </View>
    );
  }
}
//todo I'm not 100% convinced that the text over the map is the best approach.
//<View style={{flex: 1, backgroundColor: 'powderblue'}} >
//  <NavBar/>
//</View>