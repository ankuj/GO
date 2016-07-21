import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, ListView, TouchableOpacity } from 'react-native';
import styles from './styles';
import MapView from 'react-native-maps';

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

const pokeLogos = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46,p47,p48,p49,p50,p51,p52,p53,p54,p55,p56,p57,p58,p59,p60,p61,p62,p63,p64,p65,p66,p67,p68,p69,p70,p71,p72,p73,p74,p75,p76,p77,p78,p79,p80,p81,p82,p83,p84,p85,p86,p87,p88,p89,p90,p91,p92,p93,p94,p95,p96,p97,p98,p99,p100,p101,p102,p103,p104,p105,p106,p107,p108,p109,p110,p111,p112,p113,p114,p115,p116,p117,p118,p119,p120,p121,p122,p123,p124,p125,p126,p127,p128,p129,p130,p131,p132,p133,p134,p135,p136,p137,p138,p139,p140,p141,p142,p143,p144,p145,p146,p147,p148,p149,p150];

export class Map extends Component {

  constructor(props, context) {
    super(props, context);

    //let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: COUNTRIES,//ds.cloneWithRows(COUNTRIES),
      cache: true,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      id: 0
    };
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

  getRandomPokemonId() {
    const min = 1;
    const max = 150;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //Scope issues with this
  //onRegionChange(region) {
  //  this.setState({ region });
  //}

  render() {
    var { width, height } = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={this.state.region}

          >
          {this.state.dataSource.map(marker => (

            <MapView.Marker
              key={this.state.id++}
              coordinate={marker}
              title={marker.name}
              centerOffset={{ x: -18, y: -60 }}
              anchor={{ x: 0.69, y: 1 }}
              image={pokeLogos[this.getRandomPokemonId()]}
            />

          ))}
        </MapView>
      </View>
    );
  }
}

const COUNTRIES = [
  {
    "latitude": 33.93911,
    "longitudeDelta": 10.0,
    "name": "Afghanistan",
    "longitude": 67.709953,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 41.153332,
    "longitudeDelta": 10.0,
    "name": "Albania",
    "longitude": 20.168331,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 28.033886,
    "longitudeDelta": 10.0,
    "name": "Algeria",
    "longitude": 1.659626,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -14.270972,
    "longitudeDelta": 10.0,
    "name": "American Samoa",
    "longitude": -170.132217,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 42.546245,
    "longitudeDelta": 10.0,
    "name": "Andorra",
    "longitude": 1.601554,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -11.202692,
    "longitudeDelta": 10.0,
    "name": "Angola",
    "longitude": 17.873887,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 18.220554,
    "longitudeDelta": 10.0,
    "name": "Anguilla",
    "longitude": -63.068615,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -75.250973,
    "longitudeDelta": 10.0,
    "name": "Antarctica",
    "longitude": -0.071389,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 17.060816,
    "longitudeDelta": 10.0,
    "name": "Antigua and Barbuda",
    "longitude": -61.796428,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -38.416097,
    "longitudeDelta": 10.0,
    "name": "Argentina",
    "longitude": -63.616672,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 40.069099,
    "longitudeDelta": 10.0,
    "name": "Armenia",
    "longitude": 45.038189,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 12.52111,
    "longitudeDelta": 10.0,
    "name": "Aruba",
    "longitude": -69.968338,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -25.274398,
    "longitudeDelta": 10.0,
    "name": "Australia",
    "longitude": 133.775136,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 47.516231,
    "longitudeDelta": 10.0,
    "name": "Austria",
    "longitude": 14.550072,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 40.143105,
    "longitudeDelta": 10.0,
    "name": "Azerbaijan",
    "longitude": 47.576927,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 25.03428,
    "longitudeDelta": 10.0,
    "name": "Bahamas",
    "longitude": -77.39628,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 25.930414,
    "longitudeDelta": 10.0,
    "name": "Bahrain",
    "longitude": 50.637772,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 23.684994,
    "longitudeDelta": 10.0,
    "name": "Bangladesh",
    "longitude": 90.356331,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 13.193887,
    "longitudeDelta": 10.0,
    "name": "Barbados",
    "longitude": -59.543198,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 53.709807,
    "longitudeDelta": 10.0,
    "name": "Belarus",
    "longitude": 27.953389,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 50.503887,
    "longitudeDelta": 10.0,
    "name": "Belgium",
    "longitude": 4.469936,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 17.189877,
    "longitudeDelta": 10.0,
    "name": "Belize",
    "longitude": -88.49765,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 9.30769,
    "longitudeDelta": 10.0,
    "name": "Benin",
    "longitude": 2.315834,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 32.321384,
    "longitudeDelta": 10.0,
    "name": "Bermuda",
    "longitude": -64.75737,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 27.514162,
    "longitudeDelta": 10.0,
    "name": "Bhutan",
    "longitude": 90.433601,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -16.290154,
    "longitudeDelta": 10.0,
    "name": "Bolivia",
    "longitude": -63.588653,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 43.915886,
    "longitudeDelta": 10.0,
    "name": "Bosnia and Herzegovina",
    "longitude": 17.679076,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -22.328474,
    "longitudeDelta": 10.0,
    "name": "Botswana",
    "longitude": 24.684866,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -54.423199,
    "longitudeDelta": 10.0,
    "name": "Bouvet Island",
    "longitude": 3.413194,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -14.235004,
    "longitudeDelta": 10.0,
    "name": "Brazil",
    "longitude": -51.92528,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -6.343194,
    "longitudeDelta": 10.0,
    "name": "British Indian Ocean Territory",
    "longitude": 71.876519,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 18.420695,
    "longitudeDelta": 10.0,
    "name": "British Virgin Islands",
    "longitude": -64.639968,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 4.535277,
    "longitudeDelta": 10.0,
    "name": "Brunei",
    "longitude": 114.727669,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 42.733883,
    "longitudeDelta": 10.0,
    "name": "Bulgaria",
    "longitude": 25.48583,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 12.238333,
    "longitudeDelta": 10.0,
    "name": "Burkina Faso",
    "longitude": -1.561593,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -3.373056,
    "longitudeDelta": 10.0,
    "name": "Burundi",
    "longitude": 29.918886,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 12.565679,
    "longitudeDelta": 10.0,
    "name": "Cambodia",
    "longitude": 104.990963,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 7.369722,
    "longitudeDelta": 10.0,
    "name": "Cameroon",
    "longitude": 12.354722,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 56.130366,
    "longitudeDelta": 10.0,
    "name": "Canada",
    "longitude": -106.346771,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 16.002082,
    "longitudeDelta": 10.0,
    "name": "Cape Verde",
    "longitude": -24.013197,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 19.513469,
    "longitudeDelta": 10.0,
    "name": "Cayman Islands",
    "longitude": -80.566956,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 6.611111,
    "longitudeDelta": 10.0,
    "name": "Central African Republic",
    "longitude": 20.939444,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 15.454166,
    "longitudeDelta": 10.0,
    "name": "Chad",
    "longitude": 18.732207,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -35.675147,
    "longitudeDelta": 10.0,
    "name": "Chile",
    "longitude": -71.542969,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 35.86166,
    "longitudeDelta": 10.0,
    "name": "China",
    "longitude": 104.195397,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -10.447525,
    "longitudeDelta": 10.0,
    "name": "Christmas Island",
    "longitude": 105.690449,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -12.164165,
    "longitudeDelta": 10.0,
    "name": "Cocos [Keeling] Islands",
    "longitude": 96.870956,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 4.570868,
    "longitudeDelta": 10.0,
    "name": "Colombia",
    "longitude": -74.297333,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -11.875001,
    "longitudeDelta": 10.0,
    "name": "Comoros",
    "longitude": 43.872219,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -4.038333,
    "longitudeDelta": 10.0,
    "name": "Congo [DRC]",
    "longitude": 21.758664,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -0.228021,
    "longitudeDelta": 10.0,
    "name": "Congo [Republic]",
    "longitude": 15.827659,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -21.236736,
    "longitudeDelta": 10.0,
    "name": "Cook Islands",
    "longitude": -159.777671,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 9.748917,
    "longitudeDelta": 10.0,
    "name": "Costa Rica",
    "longitude": -83.753428,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 45.1,
    "longitudeDelta": 10.0,
    "name": "Croatia",
    "longitude": 15.2,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 21.521757,
    "longitudeDelta": 10.0,
    "name": "Cuba",
    "longitude": -77.781167,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 35.126413,
    "longitudeDelta": 10.0,
    "name": "Cyprus",
    "longitude": 33.429859,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 49.817492,
    "longitudeDelta": 10.0,
    "name": "Czech Republic",
    "longitude": 15.472962,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 7.539989,
    "longitudeDelta": 10.0,
    "name": "C\u00f4te d'Ivoire",
    "longitude": -5.54708,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 56.26392,
    "longitudeDelta": 10.0,
    "name": "Denmark",
    "longitude": 9.501785,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 11.825138,
    "longitudeDelta": 10.0,
    "name": "Djibouti",
    "longitude": 42.590275,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 15.414999,
    "longitudeDelta": 10.0,
    "name": "Dominica",
    "longitude": -61.370976,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 18.735693,
    "longitudeDelta": 10.0,
    "name": "Dominican Republic",
    "longitude": -70.162651,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -1.831239,
    "longitudeDelta": 10.0,
    "name": "Ecuador",
    "longitude": -78.183406,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 26.820553,
    "longitudeDelta": 10.0,
    "name": "Egypt",
    "longitude": 30.802498,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 13.794185,
    "longitudeDelta": 10.0,
    "name": "El Salvador",
    "longitude": -88.89653,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 1.650801,
    "longitudeDelta": 10.0,
    "name": "Equatorial Guinea",
    "longitude": 10.267895,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 15.179384,
    "longitudeDelta": 10.0,
    "name": "Eritrea",
    "longitude": 39.782334,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 58.595272,
    "longitudeDelta": 10.0,
    "name": "Estonia",
    "longitude": 25.013607,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 9.145,
    "longitudeDelta": 10.0,
    "name": "Ethiopia",
    "longitude": 40.489673,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -51.796253,
    "longitudeDelta": 10.0,
    "name": "Falkland Islands [Islas Malvinas]",
    "longitude": -59.523613,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 61.892635,
    "longitudeDelta": 10.0,
    "name": "Faroe Islands",
    "longitude": -6.911806,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -16.578193,
    "longitudeDelta": 10.0,
    "name": "Fiji",
    "longitude": 179.414413,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 61.92411,
    "longitudeDelta": 10.0,
    "name": "Finland",
    "longitude": 25.748151,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 46.227638,
    "longitudeDelta": 10.0,
    "name": "France",
    "longitude": 2.213749,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 3.933889,
    "longitudeDelta": 10.0,
    "name": "French Guiana",
    "longitude": -53.125782,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -17.679742,
    "longitudeDelta": 10.0,
    "name": "French Polynesia",
    "longitude": -149.406843,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -49.280366,
    "longitudeDelta": 10.0,
    "name": "French Southern Territories",
    "longitude": 69.348557,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -0.803689,
    "longitudeDelta": 10.0,
    "name": "Gabon",
    "longitude": 11.609444,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 13.443182,
    "longitudeDelta": 10.0,
    "name": "Gambia",
    "longitude": -15.310139,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 31.354676,
    "longitudeDelta": 10.0,
    "name": "Gaza Strip",
    "longitude": 34.308825,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 42.315407,
    "longitudeDelta": 10.0,
    "name": "Georgia",
    "longitude": 43.356892,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 51.165691,
    "longitudeDelta": 10.0,
    "name": "Germany",
    "longitude": 10.451526,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 7.946527,
    "longitudeDelta": 10.0,
    "name": "Ghana",
    "longitude": -1.023194,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 36.137741,
    "longitudeDelta": 10.0,
    "name": "Gibraltar",
    "longitude": -5.345374,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 39.074208,
    "longitudeDelta": 10.0,
    "name": "Greece",
    "longitude": 21.824312,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 71.706936,
    "longitudeDelta": 10.0,
    "name": "Greenland",
    "longitude": -42.604303,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 12.262776,
    "longitudeDelta": 10.0,
    "name": "Grenada",
    "longitude": -61.604171,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 16.995971,
    "longitudeDelta": 10.0,
    "name": "Guadeloupe",
    "longitude": -62.067641,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 13.444304,
    "longitudeDelta": 10.0,
    "name": "Guam",
    "longitude": 144.793731,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 15.783471,
    "longitudeDelta": 10.0,
    "name": "Guatemala",
    "longitude": -90.230759,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 49.465691,
    "longitudeDelta": 10.0,
    "name": "Guernsey",
    "longitude": -2.585278,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 9.945587,
    "longitudeDelta": 10.0,
    "name": "Guinea",
    "longitude": -9.696645,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 11.803749,
    "longitudeDelta": 10.0,
    "name": "Guinea-Bissau",
    "longitude": -15.180413,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 4.860416,
    "longitudeDelta": 10.0,
    "name": "Guyana",
    "longitude": -58.93018,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 18.971187,
    "longitudeDelta": 10.0,
    "name": "Haiti",
    "longitude": -72.285215,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -53.08181,
    "longitudeDelta": 10.0,
    "name": "Heard Island and McDonald Islands",
    "longitude": 73.504158,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 15.199999,
    "longitudeDelta": 10.0,
    "name": "Honduras",
    "longitude": -86.241905,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 22.396428,
    "longitudeDelta": 10.0,
    "name": "Hong Kong",
    "longitude": 114.109497,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 47.162494,
    "longitudeDelta": 10.0,
    "name": "Hungary",
    "longitude": 19.503304,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 64.963051,
    "longitudeDelta": 10.0,
    "name": "Iceland",
    "longitude": -19.020835,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 20.593684,
    "longitudeDelta": 10.0,
    "name": "India",
    "longitude": 78.96288,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -0.789275,
    "longitudeDelta": 10.0,
    "name": "Indonesia",
    "longitude": 113.921327,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 32.427908,
    "longitudeDelta": 10.0,
    "name": "Iran",
    "longitude": 53.688046,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 33.223191,
    "longitudeDelta": 10.0,
    "name": "Iraq",
    "longitude": 43.679291,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 53.41291,
    "longitudeDelta": 10.0,
    "name": "Ireland",
    "longitude": -8.24389,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 54.236107,
    "longitudeDelta": 10.0,
    "name": "Isle of Man",
    "longitude": -4.548056,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 31.046051,
    "longitudeDelta": 10.0,
    "name": "Israel",
    "longitude": 34.851612,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 41.87194,
    "longitudeDelta": 10.0,
    "name": "Italy",
    "longitude": 12.56738,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 18.109581,
    "longitudeDelta": 10.0,
    "name": "Jamaica",
    "longitude": -77.297508,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 36.204824,
    "longitudeDelta": 10.0,
    "name": "Japan",
    "longitude": 138.252924,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 49.214439,
    "longitudeDelta": 10.0,
    "name": "Jersey",
    "longitude": -2.13125,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 30.585164,
    "longitudeDelta": 10.0,
    "name": "Jordan",
    "longitude": 36.238414,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 48.019573,
    "longitudeDelta": 10.0,
    "name": "Kazakhstan",
    "longitude": 66.923684,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -0.023559,
    "longitudeDelta": 10.0,
    "name": "Kenya",
    "longitude": 37.906193,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -3.370417,
    "longitudeDelta": 10.0,
    "name": "Kiribati",
    "longitude": -168.734039,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 42.602636,
    "longitudeDelta": 10.0,
    "name": "Kosovo",
    "longitude": 20.902977,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 29.31166,
    "longitudeDelta": 10.0,
    "name": "Kuwait",
    "longitude": 47.481766,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 41.20438,
    "longitudeDelta": 10.0,
    "name": "Kyrgyzstan",
    "longitude": 74.766098,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 19.85627,
    "longitudeDelta": 10.0,
    "name": "Laos",
    "longitude": 102.495496,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 56.879635,
    "longitudeDelta": 10.0,
    "name": "Latvia",
    "longitude": 24.603189,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 33.854721,
    "longitudeDelta": 10.0,
    "name": "Lebanon",
    "longitude": 35.862285,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -29.609988,
    "longitudeDelta": 10.0,
    "name": "Lesotho",
    "longitude": 28.233608,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 6.428055,
    "longitudeDelta": 10.0,
    "name": "Liberia",
    "longitude": -9.429499,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 26.3351,
    "longitudeDelta": 10.0,
    "name": "Libya",
    "longitude": 17.228331,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 47.166,
    "longitudeDelta": 10.0,
    "name": "Liechtenstein",
    "longitude": 9.555373,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 55.169438,
    "longitudeDelta": 10.0,
    "name": "Lithuania",
    "longitude": 23.881275,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 49.815273,
    "longitudeDelta": 10.0,
    "name": "Luxembourg",
    "longitude": 6.129583,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 22.198745,
    "longitudeDelta": 10.0,
    "name": "Macau",
    "longitude": 113.543873,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 41.608635,
    "longitudeDelta": 10.0,
    "name": "Macedonia [FYROM]",
    "longitude": 21.745275,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -18.766947,
    "longitudeDelta": 10.0,
    "name": "Madagascar",
    "longitude": 46.869107,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -13.254308,
    "longitudeDelta": 10.0,
    "name": "Malawi",
    "longitude": 34.301525,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 4.210484,
    "longitudeDelta": 10.0,
    "name": "Malaysia",
    "longitude": 101.975766,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 3.202778,
    "longitudeDelta": 10.0,
    "name": "Maldives",
    "longitude": 73.22068,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 17.570692,
    "longitudeDelta": 10.0,
    "name": "Mali",
    "longitude": -3.996166,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 35.937496,
    "longitudeDelta": 10.0,
    "name": "Malta",
    "longitude": 14.375416,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 7.131474,
    "longitudeDelta": 10.0,
    "name": "Marshall Islands",
    "longitude": 171.184478,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 14.641528,
    "longitudeDelta": 10.0,
    "name": "Martinique",
    "longitude": -61.024174,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 21.00789,
    "longitudeDelta": 10.0,
    "name": "Mauritania",
    "longitude": -10.940835,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -20.348404,
    "longitudeDelta": 10.0,
    "name": "Mauritius",
    "longitude": 57.552152,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -12.8275,
    "longitudeDelta": 10.0,
    "name": "Mayotte",
    "longitude": 45.166244,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 23.634501,
    "longitudeDelta": 10.0,
    "name": "Mexico",
    "longitude": -102.552784,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 7.425554,
    "longitudeDelta": 10.0,
    "name": "Micronesia",
    "longitude": 150.550812,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 47.411631,
    "longitudeDelta": 10.0,
    "name": "Moldova",
    "longitude": 28.369885,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 43.750298,
    "longitudeDelta": 0.5,
    "name": "Monaco",
    "longitude": 7.412841,
    "latitudeDelta": 0.5
  },
  {
    "latitude": 46.862496,
    "longitudeDelta": 10.0,
    "name": "Mongolia",
    "longitude": 103.846656,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 42.708678,
    "longitudeDelta": 10.0,
    "name": "Montenegro",
    "longitude": 19.37439,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 16.742498,
    "longitudeDelta": 10.0,
    "name": "Montserrat",
    "longitude": -62.187366,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 31.791702,
    "longitudeDelta": 10.0,
    "name": "Morocco",
    "longitude": -7.09262,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -18.665695,
    "longitudeDelta": 10.0,
    "name": "Mozambique",
    "longitude": 35.529562,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 21.913965,
    "longitudeDelta": 10.0,
    "name": "Myanmar [Burma]",
    "longitude": 95.956223,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -22.95764,
    "longitudeDelta": 10.0,
    "name": "Namibia",
    "longitude": 18.49041,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -0.522778,
    "longitudeDelta": 10.0,
    "name": "Nauru",
    "longitude": 166.931503,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 28.394857,
    "longitudeDelta": 10.0,
    "name": "Nepal",
    "longitude": 84.124008,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 52.132633,
    "longitudeDelta": 10.0,
    "name": "Netherlands",
    "longitude": 5.291266,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 12.226079,
    "longitudeDelta": 10.0,
    "name": "Netherlands Antilles",
    "longitude": -69.060087,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -20.904305,
    "longitudeDelta": 10.0,
    "name": "New Caledonia",
    "longitude": 165.618042,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -40.900557,
    "longitudeDelta": 10.0,
    "name": "New Zealand",
    "longitude": 174.885971,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 12.865416,
    "longitudeDelta": 10.0,
    "name": "Nicaragua",
    "longitude": -85.207229,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 17.607789,
    "longitudeDelta": 10.0,
    "name": "Niger",
    "longitude": 8.081666,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 9.081999,
    "longitudeDelta": 10.0,
    "name": "Nigeria",
    "longitude": 8.675277,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -19.054445,
    "longitudeDelta": 10.0,
    "name": "Niue",
    "longitude": -169.867233,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -29.040835,
    "longitudeDelta": 10.0,
    "name": "Norfolk Island",
    "longitude": 167.954712,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 40.339852,
    "longitudeDelta": 10.0,
    "name": "North Korea",
    "longitude": 127.510093,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 17.33083,
    "longitudeDelta": 10.0,
    "name": "Northern Mariana Islands",
    "longitude": 145.38469,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 60.472024,
    "longitudeDelta": 10.0,
    "name": "Norway",
    "longitude": 8.468946,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 21.512583,
    "longitudeDelta": 10.0,
    "name": "Oman",
    "longitude": 55.923255,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 30.375321,
    "longitudeDelta": 10.0,
    "name": "Pakistan",
    "longitude": 69.345116,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 7.51498,
    "longitudeDelta": 10.0,
    "name": "Palau",
    "longitude": 134.58252,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 31.952162,
    "longitudeDelta": 10.0,
    "name": "Palestinian Territories",
    "longitude": 35.233154,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 8.537981,
    "longitudeDelta": 10.0,
    "name": "Panama",
    "longitude": -80.782127,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -6.314993,
    "longitudeDelta": 10.0,
    "name": "Papua New Guinea",
    "longitude": 143.95555,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -23.442503,
    "longitudeDelta": 10.0,
    "name": "Paraguay",
    "longitude": -58.443832,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -9.189967,
    "longitudeDelta": 10.0,
    "name": "Peru",
    "longitude": -75.015152,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 12.879721,
    "longitudeDelta": 10.0,
    "name": "Philippines",
    "longitude": 121.774017,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -24.703615,
    "longitudeDelta": 10.0,
    "name": "Pitcairn Islands",
    "longitude": -127.439308,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 51.919438,
    "longitudeDelta": 10.0,
    "name": "Poland",
    "longitude": 19.145136,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 39.399872,
    "longitudeDelta": 10.0,
    "name": "Portugal",
    "longitude": -8.224454,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 18.220833,
    "longitudeDelta": 10.0,
    "name": "Puerto Rico",
    "longitude": -66.590149,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 25.354826,
    "longitudeDelta": 10.0,
    "name": "Qatar",
    "longitude": 51.183884,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 45.943161,
    "longitudeDelta": 10.0,
    "name": "Romania",
    "longitude": 24.96676,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 61.52401,
    "longitudeDelta": 10.0,
    "name": "Russia",
    "longitude": 105.318756,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -1.940278,
    "longitudeDelta": 10.0,
    "name": "Rwanda",
    "longitude": 29.873888,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -21.115141,
    "longitudeDelta": 10.0,
    "name": "R\u00e9union",
    "longitude": 55.536384,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -24.143474,
    "longitudeDelta": 10.0,
    "name": "Saint Helena",
    "longitude": -10.030696,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 17.357822,
    "longitudeDelta": 10.0,
    "name": "Saint Kitts and Nevis",
    "longitude": -62.782998,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 13.909444,
    "longitudeDelta": 10.0,
    "name": "Saint Lucia",
    "longitude": -60.978893,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 46.941936,
    "longitudeDelta": 10.0,
    "name": "Saint Pierre and Miquelon",
    "longitude": -56.27111,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 12.984305,
    "longitudeDelta": 10.0,
    "name": "Saint Vincent and the Grenadines",
    "longitude": -61.287228,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -13.759029,
    "longitudeDelta": 10.0,
    "name": "Samoa",
    "longitude": -172.104629,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 43.94236,
    "longitudeDelta": 10.0,
    "name": "San Marino",
    "longitude": 12.457777,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 23.885942,
    "longitudeDelta": 10.0,
    "name": "Saudi Arabia",
    "longitude": 45.079162,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 14.497401,
    "longitudeDelta": 10.0,
    "name": "Senegal",
    "longitude": -14.452362,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 44.016521,
    "longitudeDelta": 10.0,
    "name": "Serbia",
    "longitude": 21.005859,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -4.679574,
    "longitudeDelta": 10.0,
    "name": "Seychelles",
    "longitude": 55.491977,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 8.460555,
    "longitudeDelta": 10.0,
    "name": "Sierra Leone",
    "longitude": -11.779889,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 1.352083,
    "longitudeDelta": 10.0,
    "name": "Singapore",
    "longitude": 103.819836,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 48.669026,
    "longitudeDelta": 10.0,
    "name": "Slovakia",
    "longitude": 19.699024,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 46.151241,
    "longitudeDelta": 10.0,
    "name": "Slovenia",
    "longitude": 14.995463,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -9.64571,
    "longitudeDelta": 10.0,
    "name": "Solomon Islands",
    "longitude": 160.156194,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 5.152149,
    "longitudeDelta": 10.0,
    "name": "Somalia",
    "longitude": 46.199616,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -30.559482,
    "longitudeDelta": 10.0,
    "name": "South Africa",
    "longitude": 22.937506,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -54.429579,
    "longitudeDelta": 10.0,
    "name": "South Georgia and the South Sandwich Islands",
    "longitude": -36.587909,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 35.907757,
    "longitudeDelta": 10.0,
    "name": "South Korea",
    "longitude": 127.766922,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 40.463667,
    "longitudeDelta": 10.0,
    "name": "Spain",
    "longitude": -3.74922,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 7.873054,
    "longitudeDelta": 10.0,
    "name": "Sri Lanka",
    "longitude": 80.771797,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 12.862807,
    "longitudeDelta": 10.0,
    "name": "Sudan",
    "longitude": 30.217636,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 3.919305,
    "longitudeDelta": 10.0,
    "name": "Suriname",
    "longitude": -56.027783,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 77.553604,
    "longitudeDelta": 10.0,
    "name": "Svalbard and Jan Mayen",
    "longitude": 23.670272,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -26.522503,
    "longitudeDelta": 10.0,
    "name": "Swaziland",
    "longitude": 31.465866,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 60.128161,
    "longitudeDelta": 10.0,
    "name": "Sweden",
    "longitude": 18.643501,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 46.818188,
    "longitudeDelta": 10.0,
    "name": "Switzerland",
    "longitude": 8.227512,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 34.802075,
    "longitudeDelta": 10.0,
    "name": "Syria",
    "longitude": 38.996815,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 0.18636,
    "longitudeDelta": 10.0,
    "name": "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
    "longitude": 6.613081,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 23.69781,
    "longitudeDelta": 10.0,
    "name": "Taiwan",
    "longitude": 120.960515,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 38.861034,
    "longitudeDelta": 10.0,
    "name": "Tajikistan",
    "longitude": 71.276093,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -6.369028,
    "longitudeDelta": 10.0,
    "name": "Tanzania",
    "longitude": 34.888822,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 15.870032,
    "longitudeDelta": 10.0,
    "name": "Thailand",
    "longitude": 100.992541,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -8.874217,
    "longitudeDelta": 10.0,
    "name": "Timor-Leste",
    "longitude": 125.727539,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 8.619543,
    "longitudeDelta": 10.0,
    "name": "Togo",
    "longitude": 0.824782,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -8.967363,
    "longitudeDelta": 10.0,
    "name": "Tokelau",
    "longitude": -171.855881,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -21.178986,
    "longitudeDelta": 10.0,
    "name": "Tonga",
    "longitude": -175.198242,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 10.691803,
    "longitudeDelta": 10.0,
    "name": "Trinidad and Tobago",
    "longitude": -61.222503,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 33.886917,
    "longitudeDelta": 10.0,
    "name": "Tunisia",
    "longitude": 9.537499,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 38.963745,
    "longitudeDelta": 10.0,
    "name": "Turkey",
    "longitude": 35.243322,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 38.969719,
    "longitudeDelta": 10.0,
    "name": "Turkmenistan",
    "longitude": 59.556278,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 21.694025,
    "longitudeDelta": 10.0,
    "name": "Turks and Caicos Islands",
    "longitude": -71.797928,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -7.109535,
    "longitudeDelta": 10.0,
    "name": "Tuvalu",
    "longitude": 177.64933,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 18.335765,
    "longitudeDelta": 10.0,
    "name": "U.S. Virgin Islands",
    "longitude": -64.896335,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 1.373333,
    "longitudeDelta": 10.0,
    "name": "Uganda",
    "longitude": 32.290275,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 48.379433,
    "longitudeDelta": 10.0,
    "name": "Ukraine",
    "longitude": 31.16558,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 23.424076,
    "longitudeDelta": 10.0,
    "name": "United Arab Emirates",
    "longitude": 53.847818,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 55.378051,
    "longitudeDelta": 10.0,
    "name": "United Kingdom",
    "longitude": -3.435973,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 37.09024,
    "longitudeDelta": 0.1,
    "name": "United States",
    "longitude": -95.712891,
    "latitudeDelta": 0.1
  },
  {
    "latitude": -32.522779,
    "longitudeDelta": 10.0,
    "name": "Uruguay",
    "longitude": -55.765835,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 41.377491,
    "longitudeDelta": 10.0,
    "name": "Uzbekistan",
    "longitude": 64.585262,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -15.376706,
    "longitudeDelta": 10.0,
    "name": "Vanuatu",
    "longitude": 166.959158,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 41.902916,
    "longitudeDelta": 10.0,
    "name": "Vatican City",
    "longitude": 12.453389,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 6.42375,
    "longitudeDelta": 10.0,
    "name": "Venezuela",
    "longitude": -66.58973,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 14.058324,
    "longitudeDelta": 10.0,
    "name": "Vietnam",
    "longitude": 108.277199,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -13.768752,
    "longitudeDelta": 10.0,
    "name": "Wallis and Futuna",
    "longitude": -177.156097,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 24.215527,
    "longitudeDelta": 10.0,
    "name": "Western Sahara",
    "longitude": -12.885834,
    "latitudeDelta": 10.0
  },
  {
    "latitude": 15.552727,
    "longitudeDelta": 10.0,
    "name": "Yemen",
    "longitude": 48.516388,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -13.133897,
    "longitudeDelta": 10.0,
    "name": "Zambia",
    "longitude": 27.849332,
    "latitudeDelta": 10.0
  },
  {
    "latitude": -19.015438,
    "longitudeDelta": 10.0,
    "name": "Zimbabwe",
    "longitude": 29.154857,
    "latitudeDelta": 10.0
  }
];


