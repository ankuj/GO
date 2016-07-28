import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import MapView from 'react-native-maps';

import { pinService } from '../../services/pinService';
import { PokeMap } from './pokeMap';

export class PokeMap extends Component {

  loadPins(){

    pinService.getListOfAllPins()
      .then((result) => {
        console.log(JSON.stringify(result));
        this.setState( { dataSource: result } );
      })
      .catch((error) => {
        console.log(error.message);
      });
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
        followsUserLocation={followsUserLocation}
        showsUserLocation
        zoomEnabled
        >
        {
          this.state.dataSource.map((pokemon, index) => (
            <PokeMarker {...pokemon} key={pokemon.id} index={index}/>
          ))
        }
      </MapView>

    );

  }
}