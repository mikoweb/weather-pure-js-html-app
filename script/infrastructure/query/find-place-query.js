import PlaceDto from '../../domain/dto/place-dto.js';
import Config from '../../application/config/config.js';

export default class FindPlaceQuery {
    /**
     * @param {string} query
     * @param {AbortSignal|null} signal
     * @returns {PlaceDto[]}
     */
    static async findPlace(query, signal= null) {
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=10&appid=${Config.openWeatherApiKey}`;
        const response = await fetch(url, {signal});
        const items = await response.json();
        const result = [];

        for (const item of items) {
            result.push(this.#createDtoFromObject(item));
        }

        return result;
    }

    /**
     * @param {Object} data
     * @returns {PlaceDto}
     */
    static #createDtoFromObject(data) {
        return new PlaceDto(
            data.name,
            data.local_names ? data.local_names[Config.locale] : null,
            data.lat,
            data.lon,
            data.country,
            data.state
        );
    }
}
