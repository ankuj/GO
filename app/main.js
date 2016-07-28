import React, { Component } from 'react';
import { Navigator, View, Text } from 'react-native';

import { Login } from './components/login';
import { MainSection } from './components/mainSection';

//import { DebugMap } from './components/debug/debugMap'
//import { TimeOutMap } from './components/debug/timeOutMap/timeOutMap'
import { PokeMap } from './components/debug/pokeMap/pokeMap'

//import Settings from './settings';
//const settings = Settings.load();

export class WhereDoYouGo extends Component {
  render() {

    //return (
    //  <DebugMap/>
    //);

    //return (
    //  <TimeOutMap/>
    //);

    //return (
    //  <PokeMap/>
    //);

    return (
    <Navigator
      initialRoute={{id: 'login'}}
      renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'login':
        return (<Login navigator={navigator} title='login'></Login>);
      case 'main-section':
        return (<MainSection navigator={navigator} title='main-section'/>);
    }
  }
}
