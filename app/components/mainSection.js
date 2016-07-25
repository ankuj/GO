import React, { Component } from 'react';
import { View, Text, Dimensions, Navigator } from 'react-native';
import { NavBar } from './navbar/navbar'
import { Map } from './map/map'
import { MobAds } from './ads/mobAds'
import {GiftedMessenger} from 'react-native-gifted-messenger'

var ExtraDimensions = require('react-native-extra-dimensions-android');

var message = {
		  uniqueId: 'XXXXX' // each messages should have an unique identifer - mandatory
		  text: 'Message content',
		  name: "Sender's name",
		  image: {uri: 'https://facebook.github.io/react/img/logo_og.png'},
		  position: 'left', // left for received messages, right for sent messages, center for server messages
		  date: new Date(),
		  view: null, // A custom Bubble view - the view will receive the message attributes as props
		  imageView: null, // Returns custom Image view to display image (avatar) for the message
		  status: 'Seen', // if status is 'ErrorButton', a re-send button will be displayed
		  // ...any attributes you want
		};
export class MainSection extends Component {

  render() {

    return (
    		<GiftedMessenger maxHeight={200}/>

      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>

        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
          <NavBar/>
        </View>

        <View style={{flex: 7}} >
          <Map/>
        </View>

        <MobAds/>
      </View>
    );
  }
}