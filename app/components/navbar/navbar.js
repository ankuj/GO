import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export class NavBar extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.title } >Where do you GO?</Text>
      </View>
    );
  }
}