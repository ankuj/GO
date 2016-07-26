import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';

import styles from './styles';
import { CustomCallout } from './CustomCallout'
import MapView from 'react-native-maps';

var { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 45.1885;
const LONGITUDE = 5.7245;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export class DebugMap extends Component {

  constructor() {
    super();

    this.state = {
      region: {
        latitude: 45.1885,
        longitude: 6.7245,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0222,
      },
      markers: [
        {
          coordinate: {
            latitude: LATITUDE + SPACE,
            longitude: LONGITUDE + SPACE,
          },
        },
        {
          coordinate: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
          },
        },
        {
          coordinate: {
            latitude: LATITUDE + SPACE,
            longitude: LONGITUDE - SPACE,
          },
        },
        {
          coordinate: {
            latitude: LATITUDE - SPACE,
            longitude: LONGITUDE - SPACE,
          },
        },
      ],
    };


  }

  componentDidMount() {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('Constructor receive location', position);
        this.setState({
          currentRegion: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      },
      (error) => alert(error.message),
      {}
    );

    this.watchID = navigator.geolocation.watchPosition((position) => {
      console.log('Position changed! ', position);
      this.setState({
        currentRegion: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }
      });
    });

  }

  //show() {
  //  debugger;
  //  this.refs.m2.showCallout();
  //}

  show = () => {
    this.refs.m2.showCallout();
  };

  hide = () => {
    this.refs.m2.hideCallout();
  };

  endorse = () => {
    alert('Endorse!');
  };

  render() {

    const { region, markers } = this.state;

    return (

      <View style={styles.container}>
        <MapView
          style={ styles.map }

          region={ this.state.currentRegion }
          showsUserLocation={ true }
          >

          <MapView.Marker
            ref="m1"
            coordinate={markers[0].coordinate}
            title="This is a title"
            description="This is a description"
            onPress={this.endorse}
            />

          <MapView.Marker ref="m5" coordinate={markers[3].coordinate}>
            <MapView.Callout tooltip>

                <Text >Hide</Text>

            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker ref="m2" coordinate={markers[1].coordinate}>
            <MapView.Callout>

              <TouchableOpacity onPress={this.hide} style={[styles.bubble, styles.button]}>
                <Text>Hide</Text>
              </TouchableOpacity>

            </MapView.Callout>
          </MapView.Marker>

          <MapView.Marker
            ref="m3"
            coordinate={markers[2].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
            >
            <MapView.Callout>

              <CustomCallout>
                <Text>This is a custom callout bubble view</Text>
              </CustomCallout>

            </MapView.Callout>
          </MapView.Marker>

        </MapView>

        <View style={styles.buttonContainer}>
          <View style={styles.bubble}>
            <Text>Tap on markers to see different callouts</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.show} style={[styles.bubble, styles.button]}>
            <Text>Show</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.hide} style={[styles.bubble, styles.button]}>
            <Text>Hide</Text>
          </TouchableOpacity>
        </View>

      </View>


    );
  }

}
