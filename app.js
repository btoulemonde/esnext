

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
//console.log(othersCitiesId.length);

//Classe

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    toString() {
        return 'Trip[' + this.id + ',' + this.name + ',' + this.imageUrl + ',' + this.price + ']';
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        this._price = newPrice;
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
//console.log(parisTrip);
//console.log(name);
//console.log(parisTrip.toString());
//console.log(parisTrip.price = 100);
//console.log(parisTrip.toString());
const defaultTrip = Trip.getDefaultTrip();
//console.log(defaultTrip.toString());


// heritage
class FreeTrip extends Trip {
    price = 0;
    constructor(id, name, imageUrl, ) {
        super(id, name, imageUrl);
    }
    toString() {
        return 'Free' + super.toString();
    }
}

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
//console.log(freeTrip.toString());

//Promise, Set, Map, Arrow Function
class TripService {
    constructor() {
        this.trips = new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                for (const trip of this.trips) {
                    if (trip.name === tripName) {
                        resolve(trip);
                    }
                }
                reject(`no trip with name ${tripName} `)
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la recherche
            }, 2000)
        });
    }
}

const tripService = new TripService;
tripService.findByName('Nantes')
    .then(tripTrouve => console.log(tripTrouve))
    .catch(err => console.log(err));

class PriceService {
    constructor() {
        this.prices = new Map();
        this.prices.set('paris', 100);
        this.prices.set('rio-de-janeiro', 800);
        // no price for 'nantes'
    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                
                    if(this.prices.has(tripId)){
                        resolve(this.prices.get(tripId));
                    }
                
                reject(`no price found for id ${tripId}`);
            
            }, 2000)
        });
    }
}
const priceService = new PriceService;
priceService.findPriceByTripId('paris')
.then(priceTrouve => console.log(`le prix est de ${priceTrouve} €`))
.catch(err => console.log(err));