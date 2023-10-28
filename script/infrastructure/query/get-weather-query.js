import WeatherDto from '../../domain/dto/weather-dto.js';
import Config from '../../application/config/config.js';
import WeatherDescDto from '../../domain/dto/weather-desc-dto.js';

export default class GetWeatherQuery {
    /**
     * @param {number} lat
     * @param {number} lon
     * @returns {WeatherDto}
     */
    static async getWeather(lat, lon) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Config.openWeatherApiKey}&lang=pl&units=metric`;
        const response = await fetch(url);
        const data = await response.json();

        return this.#createWeatherDtoFromObject(data);
    }

    /**
     * @param {Object} data
     * @returns {WeatherDto}
     */
    static #createWeatherDtoFromObject(data) {
        const main = data.main;

        return new WeatherDto(
            main.temp,
            main.feels_like,
            main.pressure,
            main.humidity,
            data.wind.speed,
            data.clouds.all,
            this.#createDescFromObject(data.weather)
        );
    }

    /**
     * @param {Array} weather
     * @returns {WeatherDescDto[]}
     */
    static #createDescFromObject(weather) {
        const result = [];

        for (const item of weather) {
            result.push(new WeatherDescDto(item.main, item.description));
        }

        return result;
    }
}
