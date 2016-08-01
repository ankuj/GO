import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, ListView, TouchableOpacity } from 'react-native';
import styles from './styles';
import MapView from 'react-native-maps';
import { pinService } from '../../services/pinService'

import p0 from './assets/0.png';
import p1 from './assets/1.png';
import p2 from './assets/2.png';
import p3 from './assets/3.png';
import p4 from './assets/4.png';
import p5 from './assets/5.png';
import p6 from './assets/6.png';
import p7 from './assets/7.png';
import p8 from './assets/8.png';
import p9 from './assets/9.png';
import p10 from './assets/10.png';
import p11 from './assets/11.png';
import p12 from './assets/12.png';
import p13 from './assets/13.png';
import p14 from './assets/14.png';
import p15 from './assets/15.png';
import p16 from './assets/16.png';
import p17 from './assets/17.png';
import p18 from './assets/18.png';
import p19 from './assets/19.png';
import p20 from './assets/20.png';
import p21 from './assets/21.png';
import p22 from './assets/22.png';
import p23 from './assets/23.png';
import p24 from './assets/24.png';
import p25 from './assets/25.png';
import p26 from './assets/26.png';
import p27 from './assets/27.png';
import p28 from './assets/28.png';
import p29 from './assets/29.png';
import p30 from './assets/30.png';
import p31 from './assets/31.png';
import p32 from './assets/32.png';
import p33 from './assets/33.png';
import p34 from './assets/34.png';
import p35 from './assets/35.png';
import p36 from './assets/36.png';
import p37 from './assets/37.png';
import p38 from './assets/38.png';
import p39 from './assets/39.png';
import p40 from './assets/40.png';
import p41 from './assets/41.png';
import p42 from './assets/42.png';
import p43 from './assets/43.png';
import p44 from './assets/44.png';
import p45 from './assets/45.png';
import p46 from './assets/46.png';
import p47 from './assets/47.png';
import p48 from './assets/48.png';
import p49 from './assets/49.png';
import p50 from './assets/50.png';
import p51 from './assets/51.png';
import p52 from './assets/52.png';
import p53 from './assets/53.png';
import p54 from './assets/54.png';
import p55 from './assets/55.png';
import p56 from './assets/56.png';
import p57 from './assets/57.png';
import p58 from './assets/58.png';
import p59 from './assets/59.png';
import p60 from './assets/60.png';
import p61 from './assets/61.png';
import p62 from './assets/62.png';
import p63 from './assets/63.png';
import p64 from './assets/64.png';
import p65 from './assets/65.png';
import p66 from './assets/66.png';
import p67 from './assets/67.png';
import p68 from './assets/68.png';
import p69 from './assets/69.png';
import p70 from './assets/70.png';
import p71 from './assets/71.png';
import p72 from './assets/72.png';
import p73 from './assets/73.png';
import p74 from './assets/74.png';
import p75 from './assets/75.png';
import p76 from './assets/76.png';
import p77 from './assets/77.png';
import p78 from './assets/78.png';
import p79 from './assets/79.png';
import p80 from './assets/80.png';
import p81 from './assets/81.png';
import p82 from './assets/82.png';
import p83 from './assets/83.png';
import p84 from './assets/84.png';
import p85 from './assets/85.png';
import p86 from './assets/86.png';
import p87 from './assets/87.png';
import p88 from './assets/88.png';
import p89 from './assets/89.png';
import p90 from './assets/90.png';
import p91 from './assets/91.png';
import p92 from './assets/92.png';
import p93 from './assets/93.png';
import p94 from './assets/94.png';
import p95 from './assets/95.png';
import p96 from './assets/96.png';
import p97 from './assets/97.png';
import p98 from './assets/98.png';
import p99 from './assets/99.png';
import p100 from './assets/100.png';
import p101 from './assets/101.png';
import p102 from './assets/102.png';
import p103 from './assets/103.png';
import p104 from './assets/104.png';
import p105 from './assets/105.png';
import p106 from './assets/106.png';
import p107 from './assets/107.png';
import p108 from './assets/108.png';
import p109 from './assets/109.png';
import p110 from './assets/110.png';
import p111 from './assets/111.png';
import p112 from './assets/112.png';
import p113 from './assets/113.png';
import p114 from './assets/114.png';
import p115 from './assets/115.png';
import p116 from './assets/116.png';
import p117 from './assets/117.png';
import p118 from './assets/118.png';
import p119 from './assets/119.png';
import p120 from './assets/120.png';
import p121 from './assets/121.png';
import p122 from './assets/122.png';
import p123 from './assets/123.png';
import p124 from './assets/124.png';
import p125 from './assets/125.png';
import p126 from './assets/126.png';
import p127 from './assets/127.png';
import p128 from './assets/128.png';
import p129 from './assets/129.png';
import p130 from './assets/130.png';
import p131 from './assets/131.png';
import p132 from './assets/132.png';
import p133 from './assets/133.png';
import p134 from './assets/134.png';
import p135 from './assets/135.png';
import p136 from './assets/136.png';
import p137 from './assets/137.png';
import p138 from './assets/138.png';
import p139 from './assets/139.png';
import p140 from './assets/140.png';
import p141 from './assets/141.png';
import p142 from './assets/142.png';
import p143 from './assets/143.png';
import p144 from './assets/144.png';
import p145 from './assets/145.png';
import p146 from './assets/146.png';
import p147 from './assets/147.png';
import p148 from './assets/148.png';
import p149 from './assets/149.png';
import p150 from './assets/150.png';

const HORIZONTAL_PADDING = 12;
const VERTICAL_PADDING = 6;

const pokeLogos = [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, p40, p41, p42, p43, p44, p45, p46, p47, p48, p49, p50, p51, p52, p53, p54, p55, p56, p57, p58, p59, p60, p61, p62, p63, p64, p65, p66, p67, p68, p69, p70, p71, p72, p73, p74, p75, p76, p77, p78, p79, p80, p81, p82, p83, p84, p85, p86, p87, p88, p89, p90, p91, p92, p93, p94, p95, p96, p97, p98, p99, p100, p101, p102, p103, p104, p105, p106, p107, p108, p109, p110, p111, p112, p113, p114, p115, p116, p117, p118, p119, p120, p121, p122, p123, p124, p125, p126, p127, p128, p129, p130, p131, p132, p133, p134, p135, p136, p137, p138, p139, p140, p141, p142, p143, p144, p145, p146, p147, p148, p149, p150];

export class Map extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      dataSource: [],
      cache: true,
      region: {
        latitude: 45.192968024785166,//-0.610653,
        longitude: 5.7297637313604355,//-90.667648,
        latitudeDelta: 0.0011338896060522075,
        longitudeDelta: 0.0009404495358467102
      },
      id: 0
    };
  }

  loadPins(position){

    return pinService.getListOfAllPins(position)
      .then((result) => {

        console.log(JSON.stringify(result));
        this.setState( { dataSource: result } );
      })
      .catch((error) => {
        console.log(error.message);
      });

  }

  componentDidMount() {

    navigator.geolocation.getCurrentPosition(
      (position) => {
      return this.loadPins({latitude: position.coords.latitude, longitude: position.coords.longitude});
      },
      (error) => alert(error.message), //Error handling
      {enableHighAccuracy: true, timeout: 5000} //option
    );
  }

  //toggleCache() {
  //  // a hack to force listview to reload with the same data
  //  this.setState({
  //    dataSource: this.state.dataSource.cloneWithRows([]),
  //  });
  //  this.setState({
  //    cache: !this.state.cache,
  //    dataSource: this.state.dataSource.cloneWithRows(COUNTRIES),
  //  });
  //}

  //getRandomPokemonId() {
  //  const min = 1;
  //  const max = 150;
  //  return Math.floor(Math.random() * (max - min + 1)) + min;
  //}

  //Scope issues with this
  onRegionChange(region) {
    console.log('New region: ', region);
    this.loadPins(region);
    //this.setState({ region });
  }

  render() {

    const { width, height } = Dimensions.get('window');
    
    return (
      <View style={styles.container}>

        <MapView
          style={ styles.map }
          initialRegion={ this.state.region }
          onRegionChangeComplete={ this.onRegionChange.bind(this) }
          showsUserLocation={ true }
          showsScale={true}>

          { this.state.dataSource.map(marker => (
            <MapView.Marker
              key={this.state.id++}
              coordinate={marker}
              title={marker.name}
              centerOffset={{ x: -18, y: -60 }}
              anchor={{ x: 0.69, y: 1 }}
              image={pokeLogos[marker.pokemonId]}
            />
          ))}

        </MapView>

        <View style={styles.titleBackground}>
          <Text style={styles.title}>Where do you GO?</Text>
        </View>

      </View>
    );
  }
}


// todo display some info at the bottom about the pokemon?
//<View style={styles.buttonContainer}>
//  <View style={styles.bubble}>
//    <Text style={styles.title}>Tap on markers to see different callouts</Text>
//  </View>
//</View>

