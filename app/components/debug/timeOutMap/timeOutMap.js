import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, ListView, TouchableOpacity } from 'react-native';
import styles from './styles';
import MapView from 'react-native-maps';

import p0 from '../assets/0.png';
import p1 from '../assets/1.png';
import p2 from '../assets/2.png';
import p3 from '../assets/3.png';
import p4 from '../assets/4.png';
import p5 from '../assets/5.png';
import p6 from '../assets/6.png';
import p7 from '../assets/7.png';
import p8 from '../assets/8.png';
import p9 from '../assets/9.png';
import p10 from '../assets/10.png';
import p11 from '../assets/11.png';
import p12 from '../assets/12.png';
import p13 from '../assets/13.png';
import p14 from '../assets/14.png';
import p15 from '../assets/15.png';
import p16 from '../assets/16.png';
import p17 from '../assets/17.png';
import p18 from '../assets/18.png';
import p19 from '../assets/19.png';
import p20 from '../assets/20.png';
import p21 from '../assets/21.png';
import p22 from '../assets/22.png';
import p23 from '../assets/23.png';
import p24 from '../assets/24.png';
import p25 from '../assets/25.png';
import p26 from '../assets/26.png';
import p27 from '../assets/27.png';
import p28 from '../assets/28.png';
import p29 from '../assets/29.png';
import p30 from '../assets/30.png';
import p31 from '../assets/31.png';
import p32 from '../assets/32.png';
import p33 from '../assets/33.png';
import p34 from '../assets/34.png';
import p35 from '../assets/35.png';
import p36 from '../assets/36.png';
import p37 from '../assets/37.png';
import p38 from '../assets/38.png';
import p39 from '../assets/39.png';
import p40 from '../assets/40.png';
import p41 from '../assets/41.png';
import p42 from '../assets/42.png';
import p43 from '../assets/43.png';
import p44 from '../assets/44.png';
import p45 from '../assets/45.png';
import p46 from '../assets/46.png';
import p47 from '../assets/47.png';
import p48 from '../assets/48.png';
import p49 from '../assets/49.png';
import p50 from '../assets/50.png';
import p51 from '../assets/51.png';
import p52 from '../assets/52.png';
import p53 from '../assets/53.png';
import p54 from '../assets/54.png';
import p55 from '../assets/55.png';
import p56 from '../assets/56.png';
import p57 from '../assets/57.png';
import p58 from '../assets/58.png';
import p59 from '../assets/59.png';
import p60 from '../assets/60.png';
import p61 from '../assets/61.png';
import p62 from '../assets/62.png';
import p63 from '../assets/63.png';
import p64 from '../assets/64.png';
import p65 from '../assets/65.png';
import p66 from '../assets/66.png';
import p67 from '../assets/67.png';
import p68 from '../assets/68.png';
import p69 from '../assets/69.png';
import p70 from '../assets/70.png';
import p71 from '../assets/71.png';
import p72 from '../assets/72.png';
import p73 from '../assets/73.png';
import p74 from '../assets/74.png';
import p75 from '../assets/75.png';
import p76 from '../assets/76.png';
import p77 from '../assets/77.png';
import p78 from '../assets/78.png';
import p79 from '../assets/79.png';
import p80 from '../assets/80.png';
import p81 from '../assets/81.png';
import p82 from '../assets/82.png';
import p83 from '../assets/83.png';
import p84 from '../assets/84.png';
import p85 from '../assets/85.png';
import p86 from '../assets/86.png';
import p87 from '../assets/87.png';
import p88 from '../assets/88.png';
import p89 from '../assets/89.png';
import p90 from '../assets/90.png';
import p91 from '../assets/91.png';
import p92 from '../assets/92.png';
import p93 from '../assets/93.png';
import p94 from '../assets/94.png';
import p95 from '../assets/95.png';
import p96 from '../assets/96.png';
import p97 from '../assets/97.png';
import p98 from '../assets/98.png';
import p99 from '../assets/99.png';
import p100 from '../assets/100.png';
import p101 from '../assets/101.png';
import p102 from '../assets/102.png';
import p103 from '../assets/103.png';
import p104 from '../assets/104.png';
import p105 from '../assets/105.png';
import p106 from '../assets/106.png';
import p107 from '../assets/107.png';
import p108 from '../assets/108.png';
import p109 from '../assets/109.png';
import p110 from '../assets/110.png';
import p111 from '../assets/111.png';
import p112 from '../assets/112.png';
import p113 from '../assets/113.png';
import p114 from '../assets/114.png';
import p115 from '../assets/115.png';
import p116 from '../assets/116.png';
import p117 from '../assets/117.png';
import p118 from '../assets/118.png';
import p119 from '../assets/119.png';
import p120 from '../assets/120.png';
import p121 from '../assets/121.png';
import p122 from '../assets/122.png';
import p123 from '../assets/123.png';
import p124 from '../assets/124.png';
import p125 from '../assets/125.png';
import p126 from '../assets/126.png';
import p127 from '../assets/127.png';
import p128 from '../assets/128.png';
import p129 from '../assets/129.png';
import p130 from '../assets/130.png';
import p131 from '../assets/131.png';
import p132 from '../assets/132.png';
import p133 from '../assets/133.png';
import p134 from '../assets/134.png';
import p135 from '../assets/135.png';
import p136 from '../assets/136.png';
import p137 from '../assets/137.png';
import p138 from '../assets/138.png';
import p139 from '../assets/139.png';
import p140 from '../assets/140.png';
import p141 from '../assets/141.png';
import p142 from '../assets/142.png';
import p143 from '../assets/143.png';
import p144 from '../assets/144.png';
import p145 from '../assets/145.png';
import p146 from '../assets/146.png';
import p147 from '../assets/147.png';
import p148 from '../assets/148.png';
import p149 from '../assets/149.png';
import p150 from '../assets/150.png';

const HORIZONTAL_PADDING = 12;
const VERTICAL_PADDING = 6;

const pokeLogos = [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17,
  p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37,
  p38, p39, p40, p41, p42, p43, p44, p45, p46, p47, p48, p49, p50, p51, p52, p53, p54, p55, p56, p57,
  p58, p59, p60, p61, p62, p63, p64, p65, p66, p67, p68, p69, p70, p71, p72, p73, p74, p75, p76, p77,
  p78, p79, p80, p81, p82, p83, p84, p85, p86, p87, p88, p89, p90, p91, p92, p93, p94, p95, p96, p97,
  p98, p99, p100, p101, p102, p103, p104, p105, p106, p107, p108, p109, p110, p111, p112, p113, p114,
  p115, p116, p117, p118, p119, p120, p121, p122, p123, p124, p125, p126, p127, p128, p129, p130, p131,
  p132, p133, p134, p135, p136, p137, p138, p139, p140, p141, p142, p143, p144, p145, p146, p147, p148,
  p149, p150];

var { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 45.1885;
const LONGITUDE = 5.7245;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export class TimeOutMap extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      dataSource: {},
      region: {
        latitude: 45.1885,
        longitude: 6.7245,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0222,
      },
      markers: [
        {

          latitude: LATITUDE + SPACE,
          longitude: LONGITUDE + SPACE,
          pokemonId: 3,
          "name": "A",
          timeout: 1000
        },
        {

          latitude: LATITUDE,
          longitude: LONGITUDE,
          pokemonId: 6,
          "name": "B",
          timeout: 2000
        },
        {

          latitude: LATITUDE + SPACE,
          longitude: LONGITUDE - SPACE,
          pokemonId: 9,
          "name": "C",
          timeout: 3000
        },
        {

          latitude: LATITUDE - SPACE,
          longitude: LONGITUDE - SPACE,
          pokemonId: 12,
          "name": "D",
          timeout: 4000
        },
      ],
      id: 0
    };

  }

  //endorse(pkId) {
  //  console.log('Endorsing', pkId);
  //}

  //hide = (ref) => {}
  hide(ref) {
    console.log('other pkid -> ' + ref);

    this.refs[ref].hideCallout();

    debugger;
  }

  //Scope issues with this
  onRegionChange(region) {
    console.log('New region.. new call to the backend');
    //this.setState({region});
  }

  render() {

    return (
      <View style={styles.container}>

        <MapView
          style={ styles.map }
          initialRegion={ this.state.region }
          onRegionChange={ this.onRegionChange.bind(this) }
          showsUserLocation={true}
          showsScale={false}>

          { this.state.markers.map(marker => {


            console.log('time out');
            let reference = this.state.id++;

            setTimeout(() => {

              console.log('I do not leak!');
              this.hide(reference);

            }, marker.timeout);

            return <MapView.Marker
              ref={reference}
              key={reference}
              coordinate={marker}
              image={pokeLogos[marker.pokemonId]}
              title={marker.name}


              />
          })}

        </MapView>

      </View>
    );
  }
}

//onCalloutPress

const COUNTRIES = [
  {
    "latitude": 33.93911,
    "name": "Afghanistan",
    "longitude": 67.709953,

  },
  {
    "latitude": 41.153332,
    "name": "Albania",
    "longitude": 20.168331,

  },
  {
    "latitude": 28.033886,
    "name": "Algeria",
    "longitude": 1.659626,

  },
  {
    "latitude": -14.270972,
    "name": "American Samoa",
    "longitude": -170.132217,

  },
  {
    "latitude": 42.546245,
    "name": "Andorra",
    "longitude": 1.601554,

  },
  {
    "latitude": -11.202692,
    "name": "Angola",
    "longitude": 17.873887,

  },
  {
    "latitude": 18.220554,

    "name": "Anguilla",
    "longitude": -63.068615,

  },
  {
    "latitude": -75.250973,

    "name": "Antarctica",
    "longitude": -0.071389,

  },
  {
    "latitude": 17.060816,

    "name": "Antigua and Barbuda",
    "longitude": -61.796428,

  },
  {
    "latitude": -38.416097,

    "name": "Argentina",
    "longitude": -63.616672,

  },
  {
    "latitude": 40.069099,

    "name": "Armenia",
    "longitude": 45.038189,

  },
  {
    "latitude": 12.52111,

    "name": "Aruba",
    "longitude": -69.968338,

  },
  {
    "latitude": -25.274398,

    "name": "Australia",
    "longitude": 133.775136,

  },
  {
    "latitude": 47.516231,

    "name": "Austria",
    "longitude": 14.550072,

  },
  {
    "latitude": 40.143105,

    "name": "Azerbaijan",
    "longitude": 47.576927,

  },
  {
    "latitude": 25.03428,

    "name": "Bahamas",
    "longitude": -77.39628,

  },
  {
    "latitude": 25.930414,

    "name": "Bahrain",
    "longitude": 50.637772,

  },
  {
    "latitude": 23.684994,

    "name": "Bangladesh",
    "longitude": 90.356331,

  },
  {
    "latitude": 13.193887,

    "name": "Barbados",
    "longitude": -59.543198,

  },
  {
    "latitude": 53.709807,

    "name": "Belarus",
    "longitude": 27.953389,

  },
  {
    "latitude": 50.503887,

    "name": "Belgium",
    "longitude": 4.469936,

  },
  {
    "latitude": 17.189877,

    "name": "Belize",
    "longitude": -88.49765,

  },
  {
    "latitude": 9.30769,

    "name": "Benin",
    "longitude": 2.315834,

  },
  {
    "latitude": 32.321384,

    "name": "Bermuda",
    "longitude": -64.75737,

  },
  {
    "latitude": 27.514162,

    "name": "Bhutan",
    "longitude": 90.433601,

  },
  {
    "latitude": -16.290154,

    "name": "Bolivia",
    "longitude": -63.588653,

  },
  {
    "latitude": 43.915886,

    "name": "Bosnia and Herzegovina",
    "longitude": 17.679076,

  },
  {
    "latitude": -22.328474,

    "name": "Botswana",
    "longitude": 24.684866,

  },
  {
    "latitude": -54.423199,

    "name": "Bouvet Island",
    "longitude": 3.413194,

  },
  {
    "latitude": -14.235004,

    "name": "Brazil",
    "longitude": -51.92528,

  },
  {
    "latitude": -6.343194,

    "name": "British Indian Ocean Territory",
    "longitude": 71.876519,

  },
  {
    "latitude": 18.420695,

    "name": "British Virgin Islands",
    "longitude": -64.639968,

  },
  {
    "latitude": 4.535277,

    "name": "Brunei",
    "longitude": 114.727669,

  },
  {
    "latitude": 42.733883,

    "name": "Bulgaria",
    "longitude": 25.48583,

  },
  {
    "latitude": 12.238333,

    "name": "Burkina Faso",
    "longitude": -1.561593,

  },
  {
    "latitude": -3.373056,

    "name": "Burundi",
    "longitude": 29.918886,

  },
  {
    "latitude": 12.565679,

    "name": "Cambodia",
    "longitude": 104.990963,

  },
  {
    "latitude": 7.369722,

    "name": "Cameroon",
    "longitude": 12.354722,

  },
  {
    "latitude": 56.130366,

    "name": "Canada",
    "longitude": -106.346771,

  },
  {
    "latitude": 16.002082,

    "name": "Cape Verde",
    "longitude": -24.013197,

  },
  {
    "latitude": 19.513469,

    "name": "Cayman Islands",
    "longitude": -80.566956,

  },
  {
    "latitude": 6.611111,

    "name": "Central African Republic",
    "longitude": 20.939444,

  },
  {
    "latitude": 15.454166,

    "name": "Chad",
    "longitude": 18.732207,

  },
  {
    "latitude": -35.675147,

    "name": "Chile",
    "longitude": -71.542969,

  },
  {
    "latitude": 35.86166,

    "name": "China",
    "longitude": 104.195397,

  },
  {
    "latitude": -10.447525,

    "name": "Christmas Island",
    "longitude": 105.690449,

  },
  {
    "latitude": -12.164165,

    "name": "Cocos [Keeling] Islands",
    "longitude": 96.870956,

  },
  {
    "latitude": 4.570868,

    "name": "Colombia",
    "longitude": -74.297333,

  },
  {
    "latitude": -11.875001,

    "name": "Comoros",
    "longitude": 43.872219,

  },
  {
    "latitude": -4.038333,

    "name": "Congo [DRC]",
    "longitude": 21.758664,

  },
  {
    "latitude": -0.228021,

    "name": "Congo [Republic]",
    "longitude": 15.827659,

  },
  {
    "latitude": -21.236736,

    "name": "Cook Islands",
    "longitude": -159.777671,

  },
  {
    "latitude": 9.748917,

    "name": "Costa Rica",
    "longitude": -83.753428,

  },
  {
    "latitude": 45.1,

    "name": "Croatia",
    "longitude": 15.2,

  },
  {
    "latitude": 21.521757,

    "name": "Cuba",
    "longitude": -77.781167,

  },
  {
    "latitude": 35.126413,

    "name": "Cyprus",
    "longitude": 33.429859,

  },
  {
    "latitude": 49.817492,

    "name": "Czech Republic",
    "longitude": 15.472962,

  },
  {
    "latitude": 7.539989,

    "name": "C\u00f4te d'Ivoire",
    "longitude": -5.54708,

  },
  {
    "latitude": 56.26392,

    "name": "Denmark",
    "longitude": 9.501785,

  },
  {
    "latitude": 11.825138,

    "name": "Djibouti",
    "longitude": 42.590275,

  },
  {
    "latitude": 15.414999,

    "name": "Dominica",
    "longitude": -61.370976,

  },
  {
    "latitude": 18.735693,

    "name": "Dominican Republic",
    "longitude": -70.162651,

  },
  {
    "latitude": -1.831239,

    "name": "Ecuador",
    "longitude": -78.183406,

  },
  {
    "latitude": 26.820553,

    "name": "Egypt",
    "longitude": 30.802498,

  },
  {
    "latitude": 13.794185,

    "name": "El Salvador",
    "longitude": -88.89653,

  },
  {
    "latitude": 1.650801,

    "name": "Equatorial Guinea",
    "longitude": 10.267895,

  },
  {
    "latitude": 15.179384,

    "name": "Eritrea",
    "longitude": 39.782334,

  },
  {
    "latitude": 58.595272,

    "name": "Estonia",
    "longitude": 25.013607,

  },
  {
    "latitude": 9.145,

    "name": "Ethiopia",
    "longitude": 40.489673,

  },
  {
    "latitude": -51.796253,

    "name": "Falkland Islands [Islas Malvinas]",
    "longitude": -59.523613,

  },
  {
    "latitude": 61.892635,

    "name": "Faroe Islands",
    "longitude": -6.911806,

  },
  {
    "latitude": -16.578193,

    "name": "Fiji",
    "longitude": 179.414413,

  },
  {
    "latitude": 61.92411,

    "name": "Finland",
    "longitude": 25.748151,

  },
  {
    "latitude": 46.227638,

    "name": "France",
    "longitude": 2.213749,

  },
  {
    "latitude": 3.933889,

    "name": "French Guiana",
    "longitude": -53.125782,

  },
  {
    "latitude": -17.679742,

    "name": "French Polynesia",
    "longitude": -149.406843,

  },
  {
    "latitude": -49.280366,

    "name": "French Southern Territories",
    "longitude": 69.348557,

  },
  {
    "latitude": -0.803689,

    "name": "Gabon",
    "longitude": 11.609444,

  },
  {
    "latitude": 13.443182,

    "name": "Gambia",
    "longitude": -15.310139,

  },
  {
    "latitude": 31.354676,

    "name": "Gaza Strip",
    "longitude": 34.308825,

  },
  {
    "latitude": 42.315407,

    "name": "Georgia",
    "longitude": 43.356892,

  },
  {
    "latitude": 51.165691,

    "name": "Germany",
    "longitude": 10.451526,

  },
  {
    "latitude": 7.946527,

    "name": "Ghana",
    "longitude": -1.023194,

  },
  {
    "latitude": 36.137741,

    "name": "Gibraltar",
    "longitude": -5.345374,

  },
  {
    "latitude": 39.074208,

    "name": "Greece",
    "longitude": 21.824312,

  },
  {
    "latitude": 71.706936,

    "name": "Greenland",
    "longitude": -42.604303,

  },
  {
    "latitude": 12.262776,

    "name": "Grenada",
    "longitude": -61.604171,

  },
  {
    "latitude": 16.995971,

    "name": "Guadeloupe",
    "longitude": -62.067641,

  },
  {
    "latitude": 13.444304,

    "name": "Guam",
    "longitude": 144.793731,

  },
  {
    "latitude": 15.783471,

    "name": "Guatemala",
    "longitude": -90.230759,

  },
  {
    "latitude": 49.465691,

    "name": "Guernsey",
    "longitude": -2.585278,

  },
  {
    "latitude": 9.945587,

    "name": "Guinea",
    "longitude": -9.696645,

  },
  {
    "latitude": 11.803749,

    "name": "Guinea-Bissau",
    "longitude": -15.180413,

  },
  {
    "latitude": 4.860416,

    "name": "Guyana",
    "longitude": -58.93018,

  },
  {
    "latitude": 18.971187,

    "name": "Haiti",
    "longitude": -72.285215,

  },
  {
    "latitude": -53.08181,

    "name": "Heard Island and McDonald Islands",
    "longitude": 73.504158,

  },
  {
    "latitude": 15.199999,

    "name": "Honduras",
    "longitude": -86.241905,

  },
  {
    "latitude": 22.396428,

    "name": "Hong Kong",
    "longitude": 114.109497,

  },
  {
    "latitude": 47.162494,

    "name": "Hungary",
    "longitude": 19.503304,

  },
  {
    "latitude": 64.963051,

    "name": "Iceland",
    "longitude": -19.020835,

  },
  {
    "latitude": 20.593684,

    "name": "India",
    "longitude": 78.96288,

  },
  {
    "latitude": -0.789275,

    "name": "Indonesia",
    "longitude": 113.921327,

  },
  {
    "latitude": 32.427908,

    "name": "Iran",
    "longitude": 53.688046,

  },
  {
    "latitude": 33.223191,

    "name": "Iraq",
    "longitude": 43.679291,

  },
  {
    "latitude": 53.41291,

    "name": "Ireland",
    "longitude": -8.24389,

  },
  {
    "latitude": 54.236107,

    "name": "Isle of Man",
    "longitude": -4.548056,

  },
  {
    "latitude": 31.046051,

    "name": "Israel",
    "longitude": 34.851612,

  },
  {
    "latitude": 41.87194,

    "name": "Italy",
    "longitude": 12.56738,

  },
  {
    "latitude": 18.109581,

    "name": "Jamaica",
    "longitude": -77.297508,

  },
  {
    "latitude": 36.204824,

    "name": "Japan",
    "longitude": 138.252924,

  },
  {
    "latitude": 49.214439,

    "name": "Jersey",
    "longitude": -2.13125,

  },
  {
    "latitude": 30.585164,

    "name": "Jordan",
    "longitude": 36.238414,

  },
  {
    "latitude": 48.019573,

    "name": "Kazakhstan",
    "longitude": 66.923684,

  },
  {
    "latitude": -0.023559,

    "name": "Kenya",
    "longitude": 37.906193,

  },
  {
    "latitude": -3.370417,

    "name": "Kiribati",
    "longitude": -168.734039,

  },
  {
    "latitude": 42.602636,

    "name": "Kosovo",
    "longitude": 20.902977,

  },
  {
    "latitude": 29.31166,

    "name": "Kuwait",
    "longitude": 47.481766,

  },
  {
    "latitude": 41.20438,

    "name": "Kyrgyzstan",
    "longitude": 74.766098,

  },
  {
    "latitude": 19.85627,

    "name": "Laos",
    "longitude": 102.495496,

  },
  {
    "latitude": 56.879635,

    "name": "Latvia",
    "longitude": 24.603189,

  },
  {
    "latitude": 33.854721,

    "name": "Lebanon",
    "longitude": 35.862285,

  },
  {
    "latitude": -29.609988,

    "name": "Lesotho",
    "longitude": 28.233608,

  },
  {
    "latitude": 6.428055,

    "name": "Liberia",
    "longitude": -9.429499,

  },
  {
    "latitude": 26.3351,

    "name": "Libya",
    "longitude": 17.228331,

  },
  {
    "latitude": 47.166,

    "name": "Liechtenstein",
    "longitude": 9.555373,

  },
  {
    "latitude": 55.169438,

    "name": "Lithuania",
    "longitude": 23.881275,

  },
  {
    "latitude": 49.815273,

    "name": "Luxembourg",
    "longitude": 6.129583,

  },
  {
    "latitude": 22.198745,

    "name": "Macau",
    "longitude": 113.543873,

  },
  {
    "latitude": 41.608635,

    "name": "Macedonia [FYROM]",
    "longitude": 21.745275,

  },
  {
    "latitude": -18.766947,

    "name": "Madagascar",
    "longitude": 46.869107,

  },
  {
    "latitude": -13.254308,

    "name": "Malawi",
    "longitude": 34.301525,

  },
  {
    "latitude": 4.210484,

    "name": "Malaysia",
    "longitude": 101.975766,

  },
  {
    "latitude": 3.202778,

    "name": "Maldives",
    "longitude": 73.22068,

  },
  {
    "latitude": 17.570692,

    "name": "Mali",
    "longitude": -3.996166,

  },
  {
    "latitude": 35.937496,

    "name": "Malta",
    "longitude": 14.375416,

  },
  {
    "latitude": 7.131474,

    "name": "Marshall Islands",
    "longitude": 171.184478,

  },
  {
    "latitude": 14.641528,

    "name": "Martinique",
    "longitude": -61.024174,

  },
  {
    "latitude": 21.00789,

    "name": "Mauritania",
    "longitude": -10.940835,

  },
  {
    "latitude": -20.348404,

    "name": "Mauritius",
    "longitude": 57.552152,

  },
  {
    "latitude": -12.8275,

    "name": "Mayotte",
    "longitude": 45.166244,

  },
  {
    "latitude": 23.634501,

    "name": "Mexico",
    "longitude": -102.552784,

  },
  {
    "latitude": 7.425554,

    "name": "Micronesia",
    "longitude": 150.550812,

  },
  {
    "latitude": 47.411631,

    "name": "Moldova",
    "longitude": 28.369885,

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

    "name": "Mongolia",
    "longitude": 103.846656,

  },
  {
    "latitude": 42.708678,

    "name": "Montenegro",
    "longitude": 19.37439,

  },
  {
    "latitude": 16.742498,

    "name": "Montserrat",
    "longitude": -62.187366,

  },
  {
    "latitude": 31.791702,

    "name": "Morocco",
    "longitude": -7.09262,

  },
  {
    "latitude": -18.665695,

    "name": "Mozambique",
    "longitude": 35.529562,

  },
  {
    "latitude": 21.913965,

    "name": "Myanmar [Burma]",
    "longitude": 95.956223,

  },
  {
    "latitude": -22.95764,

    "name": "Namibia",
    "longitude": 18.49041,

  },
  {
    "latitude": -0.522778,

    "name": "Nauru",
    "longitude": 166.931503,

  },
  {
    "latitude": 28.394857,

    "name": "Nepal",
    "longitude": 84.124008,

  },
  {
    "latitude": 52.132633,

    "name": "Netherlands",
    "longitude": 5.291266,

  },
  {
    "latitude": 12.226079,

    "name": "Netherlands Antilles",
    "longitude": -69.060087,

  },
  {
    "latitude": -20.904305,

    "name": "New Caledonia",
    "longitude": 165.618042,

  },
  {
    "latitude": -40.900557,

    "name": "New Zealand",
    "longitude": 174.885971,

  },
  {
    "latitude": 12.865416,

    "name": "Nicaragua",
    "longitude": -85.207229,

  },
  {
    "latitude": 17.607789,

    "name": "Niger",
    "longitude": 8.081666,

  },
  {
    "latitude": 9.081999,

    "name": "Nigeria",
    "longitude": 8.675277,

  },
  {
    "latitude": -19.054445,

    "name": "Niue",
    "longitude": -169.867233,

  },
  {
    "latitude": -29.040835,

    "name": "Norfolk Island",
    "longitude": 167.954712,

  },
  {
    "latitude": 40.339852,

    "name": "North Korea",
    "longitude": 127.510093,

  },
  {
    "latitude": 17.33083,

    "name": "Northern Mariana Islands",
    "longitude": 145.38469,

  },
  {
    "latitude": 60.472024,

    "name": "Norway",
    "longitude": 8.468946,

  },
  {
    "latitude": 21.512583,

    "name": "Oman",
    "longitude": 55.923255,

  },
  {
    "latitude": 30.375321,

    "name": "Pakistan",
    "longitude": 69.345116,

  },
  {
    "latitude": 7.51498,

    "name": "Palau",
    "longitude": 134.58252,

  },
  {
    "latitude": 31.952162,

    "name": "Palestinian Territories",
    "longitude": 35.233154,

  },
  {
    "latitude": 8.537981,

    "name": "Panama",
    "longitude": -80.782127,

  },
  {
    "latitude": -6.314993,

    "name": "Papua New Guinea",
    "longitude": 143.95555,

  },
  {
    "latitude": -23.442503,

    "name": "Paraguay",
    "longitude": -58.443832,

  },
  {
    "latitude": -9.189967,

    "name": "Peru",
    "longitude": -75.015152,

  },
  {
    "latitude": 12.879721,

    "name": "Philippines",
    "longitude": 121.774017,

  },
  {
    "latitude": -24.703615,

    "name": "Pitcairn Islands",
    "longitude": -127.439308,

  },
  {
    "latitude": 51.919438,

    "name": "Poland",
    "longitude": 19.145136,

  },
  {
    "latitude": 39.399872,

    "name": "Portugal",
    "longitude": -8.224454,

  },
  {
    "latitude": 18.220833,

    "name": "Puerto Rico",
    "longitude": -66.590149,

  },
  {
    "latitude": 25.354826,

    "name": "Qatar",
    "longitude": 51.183884,

  },
  {
    "latitude": 45.943161,

    "name": "Romania",
    "longitude": 24.96676,

  },
  {
    "latitude": 61.52401,

    "name": "Russia",
    "longitude": 105.318756,

  },
  {
    "latitude": -1.940278,

    "name": "Rwanda",
    "longitude": 29.873888,

  },
  {
    "latitude": -21.115141,

    "name": "R\u00e9union",
    "longitude": 55.536384,

  },
  {
    "latitude": -24.143474,

    "name": "Saint Helena",
    "longitude": -10.030696,

  },
  {
    "latitude": 17.357822,

    "name": "Saint Kitts and Nevis",
    "longitude": -62.782998,

  },
  {
    "latitude": 13.909444,

    "name": "Saint Lucia",
    "longitude": -60.978893,

  },
  {
    "latitude": 46.941936,

    "name": "Saint Pierre and Miquelon",
    "longitude": -56.27111,

  },
  {
    "latitude": 12.984305,

    "name": "Saint Vincent and the Grenadines",
    "longitude": -61.287228,

  },
  {
    "latitude": -13.759029,

    "name": "Samoa",
    "longitude": -172.104629,

  },
  {
    "latitude": 43.94236,

    "name": "San Marino",
    "longitude": 12.457777,

  },
  {
    "latitude": 23.885942,

    "name": "Saudi Arabia",
    "longitude": 45.079162,

  },
  {
    "latitude": 14.497401,

    "name": "Senegal",
    "longitude": -14.452362,

  },
  {
    "latitude": 44.016521,

    "name": "Serbia",
    "longitude": 21.005859,

  },
  {
    "latitude": -4.679574,

    "name": "Seychelles",
    "longitude": 55.491977,

  },
  {
    "latitude": 8.460555,

    "name": "Sierra Leone",
    "longitude": -11.779889,

  },
  {
    "latitude": 1.352083,

    "name": "Singapore",
    "longitude": 103.819836,

  },
  {
    "latitude": 48.669026,

    "name": "Slovakia",
    "longitude": 19.699024,

  },
  {
    "latitude": 46.151241,

    "name": "Slovenia",
    "longitude": 14.995463,

  },
  {
    "latitude": -9.64571,

    "name": "Solomon Islands",
    "longitude": 160.156194,

  },
  {
    "latitude": 5.152149,

    "name": "Somalia",
    "longitude": 46.199616,

  },
  {
    "latitude": -30.559482,

    "name": "South Africa",
    "longitude": 22.937506,

  },
  {
    "latitude": -54.429579,

    "name": "South Georgia and the South Sandwich Islands",
    "longitude": -36.587909,

  },
  {
    "latitude": 35.907757,

    "name": "South Korea",
    "longitude": 127.766922,

  },
  {
    "latitude": 40.463667,

    "name": "Spain",
    "longitude": -3.74922,

  },
  {
    "latitude": 7.873054,

    "name": "Sri Lanka",
    "longitude": 80.771797,

  },
  {
    "latitude": 12.862807,

    "name": "Sudan",
    "longitude": 30.217636,

  },
  {
    "latitude": 3.919305,

    "name": "Suriname",
    "longitude": -56.027783,

  },
  {
    "latitude": 77.553604,

    "name": "Svalbard and Jan Mayen",
    "longitude": 23.670272,

  },
  {
    "latitude": -26.522503,

    "name": "Swaziland",
    "longitude": 31.465866,

  },
  {
    "latitude": 60.128161,

    "name": "Sweden",
    "longitude": 18.643501,

  },
  {
    "latitude": 46.818188,

    "name": "Switzerland",
    "longitude": 8.227512,

  },
  {
    "latitude": 34.802075,

    "name": "Syria",
    "longitude": 38.996815,

  },
  {
    "latitude": 0.18636,

    "name": "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
    "longitude": 6.613081,

  },
  {
    "latitude": 23.69781,

    "name": "Taiwan",
    "longitude": 120.960515,

  },
  {
    "latitude": 38.861034,

    "name": "Tajikistan",
    "longitude": 71.276093,

  },
  {
    "latitude": -6.369028,

    "name": "Tanzania",
    "longitude": 34.888822,

  },
  {
    "latitude": 15.870032,

    "name": "Thailand",
    "longitude": 100.992541,

  },
  {
    "latitude": -8.874217,

    "name": "Timor-Leste",
    "longitude": 125.727539,

  },
  {
    "latitude": 8.619543,

    "name": "Togo",
    "longitude": 0.824782,

  },
  {
    "latitude": -8.967363,

    "name": "Tokelau",
    "longitude": -171.855881,

  },
  {
    "latitude": -21.178986,

    "name": "Tonga",
    "longitude": -175.198242,

  },
  {
    "latitude": 10.691803,

    "name": "Trinidad and Tobago",
    "longitude": -61.222503,

  },
  {
    "latitude": 33.886917,

    "name": "Tunisia",
    "longitude": 9.537499,

  },
  {
    "latitude": 38.963745,

    "name": "Turkey",
    "longitude": 35.243322,

  },
  {
    "latitude": 38.969719,

    "name": "Turkmenistan",
    "longitude": 59.556278,

  },
  {
    "latitude": 21.694025,

    "name": "Turks and Caicos Islands",
    "longitude": -71.797928,

  },
  {
    "latitude": -7.109535,

    "name": "Tuvalu",
    "longitude": 177.64933,

  },
  {
    "latitude": 18.335765,

    "name": "U.S. Virgin Islands",
    "longitude": -64.896335,

  },
  {
    "latitude": 1.373333,

    "name": "Uganda",
    "longitude": 32.290275,

  },
  {
    "latitude": 48.379433,

    "name": "Ukraine",
    "longitude": 31.16558,

  },
  {
    "latitude": 23.424076,

    "name": "United Arab Emirates",
    "longitude": 53.847818,

  },
  {
    "latitude": 55.378051,

    "name": "United Kingdom",
    "longitude": -3.435973,

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

    "name": "Uruguay",
    "longitude": -55.765835,

  },
  {
    "latitude": 41.377491,

    "name": "Uzbekistan",
    "longitude": 64.585262,

  },
  {
    "latitude": -15.376706,

    "name": "Vanuatu",
    "longitude": 166.959158,

  },
  {
    "latitude": 41.902916,

    "name": "Vatican City",
    "longitude": 12.453389,

  },
  {
    "latitude": 6.42375,

    "name": "Venezuela",
    "longitude": -66.58973,

  },
  {
    "latitude": 14.058324,

    "name": "Vietnam",
    "longitude": 108.277199,

  },
  {
    "latitude": -13.768752,

    "name": "Wallis and Futuna",
    "longitude": -177.156097,

  },
  {
    "latitude": 24.215527,

    "name": "Western Sahara",
    "longitude": -12.885834,

  },
  {
    "latitude": 15.552727,

    "name": "Yemen",
    "longitude": 48.516388,

  },
  {
    "latitude": -13.133897,

    "name": "Zambia",
    "longitude": 27.849332,

  },
  {
    "latitude": -19.015438,

    "name": "Zimbabwe",
    "longitude": 29.154857,

  }
];