import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import MapView from 'react-native-maps';

//<script
//        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDIjGxO_grX3PyRA8vicCxcwgfAqt2Uk4M&callback=initMap">
//</script>

export class Map extends Component {
  render() {

    let myLatLng = {lat: 45.18538336, lng: 5.73860023};

    //let marker = new google.maps.Marker({
    //  position: myLatLng,
    //  map: map,
    //  title: 'Hello World!'
    //});

    return (
      <View style={ styles.container }>
        <MapView
          style={ styles.map }
          initialRegion={{
          latitude: 45.188529,
          longitude: 5.724524,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}>

        </MapView>


      </View>
    );
  }
}

/*
 //<MapView.Marker
 //  coordinate={myLatLng}
 //  image={require('./images/01.png')}
 //  />
* */