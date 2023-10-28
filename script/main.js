import FindPlaceQuery from './infrastructure/query/find-place-query.js';

async function test() {
    const places = await FindPlaceQuery.findPlace('Warszawa, Rondo Dmowskiego');
    const place = places[0];
    console.log(place.localName);
}

test();

// https://openweathermap.org/current
// https://openweathermap.org/api/geocoding-api
