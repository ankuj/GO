//import { NavAllDay } from './components/debug/MyScene';
import { MainSection } from './components/mainSection';
import React, { Component } from 'react';

//import Settings from './settings';
//const settings = Settings.load();

export class WhereDoYouGo extends Component {
  render() {
    return (

    <Navigator
      style={styles.container}
      initialRoute={{id: 'login'}}
      renderScene={this.navigatorRenderScene}/>


    );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'login':
        return (<Login navigator={navigator} title='login'></Login>);
        //return (<First navigator={navigator} title="first"/>);
      case 'main-section':
        return (<MainSection navigator={navigator} title="main-section"/>);
        //return (<Second navigator={navigator} title="second"/>);
    }
  }
}
