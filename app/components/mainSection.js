import React, { Component } from 'react';
import { View, Text, Dimensions, Navigator,NavigationBar,Styles, General, NavBarHeight } from 'react-native';
import { NavBar } from './navbar/navbar'
import { Map } from './map/map'
import { MobAds } from './ads/mobAds'
import GiftedMessenger from 'react-native-gifted-messenger'
var ExtraDimensions = require('react-native-extra-dimensions-android');
export class MainSection extends Component {


  render() {

    return (
    		
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>

      <GiftedMessenger
      maxHeight={Dimensions.get('window').height}
      />


      </View>
    );
  }
}