import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';
import MapView from 'react-native-maps';

export class MapTwo extends Component {
  render() {
    return (

      <View>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>


    );
  }

}
