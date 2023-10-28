import GetWeatherQuery from '../../infrastructure/query/get-weather-query.js';
import { views } from '../ui/init.js';

export default class LoadWeatherCommand {
    /**
     * @param {number} lat
     * @param {number} lon
     */
    static async execute(lat, lon) {
        const weather = await GetWeatherQuery.getWeather(lat, lon);

        if (views.weatherResult) {
            await views.weatherResult.render(weather);
        }
    }
}
