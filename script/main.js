import FindPlaceQuery from './infrastructure/query/find-place-query.js';
import GetWeatherQuery from './infrastructure/query/get-weather-query.js';

async function test() {
    const places = await FindPlaceQuery.findPlace('Warszawa, Rondo Dmowskiego');
    const place = places[0];

    const weather = await GetWeatherQuery.getWeather(place.lat, place.lon);
    console.log(weather);
}

test();
