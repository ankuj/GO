import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export class Map extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.header } >MAP!</Text>
      </View>
    );
  }
}