//let
let favoriteCityId = 'rome';
//console.log(favoriteCityId);
favoriteCityId = 'paris';
//console.log(favoriteCityId);

//const
const citiesId = ['paris', 'nyc', 'rome', 'rio-de-janeiro'];
//console.log(citiesId);
//citiesId=[];
citiesId.push('tokyo');
//console.log(citiesId);

//creation d'ojets
function getWeather(citiesId) {

    let city = citiesId.toUpperCase();
    let temperature = 20;
    return { city, temperature };
}
const weather = getWeather(favoriteCityId);
//console.log(weather);

//Affectation destructurée
const { city } = weather;
const { temperature } = weather;
//console.log(city);
//console.log(temperature);

//rest operator
const [parisId, nycID, ...othersCitiesId] = citiesId;
//console.log(parisId);
//console.log(nycID);
console.log(othersCitiesId.length);

//Classe

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    toString() {
        return console.log('Trip[' + this.id + ',' + this.name + ',' + this.imageUrl + ',' + this.price + ']');
    }
    get price() {
        return this._price;
    }
    static getDefaultTrip(
        id = 'rio-de-janeiro',
        name = 'Rio de Janeiro',
        imageUrl = 'img/rio-de-janeiro.jpg') {
        return new Trip(id, name, imageUrl);
    }
}

const parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
let { name } = parisTrip;
console.log(parisTrip);
console.log(name);
parisTrip.toString();
parisTrip._price = 100;
parisTrip.toString();
const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());