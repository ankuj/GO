import React, { Component } from 'react';
import { View, Text, Dimensions, Navigator,NavigationBar,Styles, General, NavBarHeight } from 'react-native';
import { NavBar } from './navbar/navbar'
import { Map } from './map/map'
import { MobAds } from './ads/mobAds'
import GiftedMessenger from 'react-native-gifted-messenger'
var ExtraDimensions = require('react-native-extra-dimensions-android');
const io = new WebSocket('ws://localhost:3000')

export class MainSection extends Component {

	componentDidMount(){
		io.send("this info")
		io.onclose = e => console.log('onclose', e.code, e.reason)
		io.onerror = e => console.log('onerror', e.message)
		io.onopen = () => console.log('connected !')
	}  

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