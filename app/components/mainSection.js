import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavBar } from './navbar/navbar'
import { Map } from './map/map'
import { MapTwo } from './map/maptwo'
import { AdMobBanner, AdMobInterstitial } from 'react-native-admob'


export class MainSection extends Component {
  render() {
  	  AdMobInterstitial.setAdUnitID('ca-app-pub-4784360138786078/9907153544');
  	  AdMobInterstitial.setTestDeviceID('4D98E460AE60002CD45B347CEDAE6AAE');
  	  AdMobInterstitial.requestAd(AdMobInterstitial.showAd);
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
        <AdMobBanner
        bannerSize="banner"
        adUnitID="ca-app-pub-4784360138786078/9907153544"
        testDeviceID="4D98E460AE60002CD45B347CEDAE6AAE"
        didFailToReceiveAdWithError={this.bannerError} />

      </View>
    );
  }
}