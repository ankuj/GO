class PinService {

  getListOfAllPins(position) {

    return this.getPokemonGoApi(position);
    //return this.getCommunityPicks();

  }

  getPokemonGoApi(position) {

    console.log('Getting the current location', position);

    //return fetch('http://wheredoyougo-api.herokuapp.com/v1/pokemon/go/pins/', {
    //return fetch('http://192.168.1.106:3000/v1/pokemon/go/wild/pins', {
    return fetch('http://139.59.210.176:3000/v1/pokemon/go/pins', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        latitude: position.latitude,
        longitude: position.longitude,
      })
    })
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        return this.createPokemonModel(resJson);
      })
      .catch((error) => {
        console.info('Pin service error', error);
        return false;
      });

  }

  getCommunityPicks() {
    return fetch('http://wheredoyougo-api.herokuapp.com/v1/pokemon/pins')
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        return this.createPokemonModel(resJson);
      })
      .catch((error) => {
        console.error(error.message);
        return false;
      });
  }

  createPokemonModel(resJson) {

    let pokemonNames = ['Unknown', 'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle',
      'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey',
      'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu',
      'Sandshrew', 'Sandslash', 'Nidoran', 'Nidorina', 'Nidoqueen', 'Nidoran', 'Nidorino', 'Nidoking', 'Clefairy',
      'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom', 'Vileplume',
      'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck',
      'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra',
      'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel',
      'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton',
      'Farfetchd', 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly',
      'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', 'Electrode', 'Exeggcute',
      'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan', 'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn',
      'Rhydon', 'Chansey', 'Tangela', 'Kangaskhan', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Starmie',
      'Mr. Mime', 'Scyther', 'Jynx', 'Electabuzz', 'Magmar', 'Pinsir', 'Tauros', 'Magikarp', 'Gyarados', 'Lapras',
      'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops',
      'Aerodactyl', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini', 'Dragonair', 'Dragonite', 'Mewtwo', 'Mew'];

    return resJson.map((pin) => {
      return {
        name: pokemonNames[pin.pokemonId],
        pokemonId: pin.pokemonId,
        latitude: pin.latitude,
        longitude: pin.longitude,
        expiration_time: pin.countdown,
        index: pin.pokemonId
      }
    })
  }

}

export let pinService = new PinService();