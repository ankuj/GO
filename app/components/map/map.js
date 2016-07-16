import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import MapView from 'react-native-maps';

export class Map extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <MapView
          style={ styles.map }
          initialRegion={{
          latitude: 45.188529,
          longitude: 5.724524,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
          />
      </View>
    );
  }
}