import React, { Component } from 'react';
import { View } from 'react-native';

import { AdMobBanner, AdMobInterstitial } from 'react-native-admob'

import globalState from '../../settings'

export class MobAds extends Component {

  //Part of react lifecycle:https://facebook.github.io/react/docs/component-specs.html
  componentDidMount() {

    if(! globalState.alredyInitialized) {
      AdMobInterstitial.setAdUnitID('ca-app-pub-4784360138786078/9907153544');
      AdMobInterstitial.setTestDeviceID('EMULATOR'); //4D98E460AE60002CD45B347CEDAE6AAE
      AdMobInterstitial.requestAd(AdMobInterstitial.showAd);
    }
    globalState.alredyInitialized = true;

  }

  render() {
    return (

      <AdMobBanner
        bannerSize="banner"
        adUnitID="ca-app-pub-4784360138786078/9907153544"
        testDeviceID="EMULATOR"
        didFailToReceiveAdWithError={this.bannerError} />

    );
  }

}
