import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import MapView from 'react-native-maps';

import { pinService } from '../../../services/pinService';
import { PokeMarker } from './pokeMarker';

export class PokeMap extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      dataSource: [],
      region: {
        latitude: 45.1885,
        longitude: 5.7245,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      id: 0
    };
  }

  loadPins() {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        pinService.getListOfAllPins(position)
          .then((result) => {
            console.log(JSON.stringify(result));
            this.setState({dataSource: result});
          })
          .catch((error) => {
            console.log(error.message);
          });
      },
      (error) => alert(error.message), //Error handling
      {enableHighAccuracy: true, timeout: 5000} //option
    );
  }

  componentDidMount() {

    this.loadPins();

  }

  render() {

    let followsUserLocation = true;



    return (

      <MapView
        style={styles.container}
        onRegionChangeComplete={(region) => this.setState({ region })}
        showsUserLocation={true} >

        <PokeMarker   latitude={45.192765201092676}
                      longitude={5.728333175454672}
                      pokemonId={21}
                      expiration_time={863618884}
                      key={0}/>

      </MapView>

    );

  }
}

//{
//  this.state.dataSource.map((pokemon, index) => (
//    <Text key={this.state.id++}> {pokemon.name}</Text>
//  ))
//}


//<PokeMarker latitude={pokemon.latitude}
//            longitude={pokemon.longitude}
//            pokemonId={pokemon.pokemonId}
//            expiration_time={pokemon.expiration_time}
//            key={this.state.id++}
//  />