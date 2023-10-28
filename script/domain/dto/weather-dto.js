export default class WeatherDto {
    #temperature;
    #temperatureFeels;
    #pressure;
    #humidity;
    #windSpeed;
    #clouds;
    #desc;

    /**
     * @param {number} temperature
     * @param {number} temperatureFeels
     * @param {number} pressure
     * @param {number} humidity
     * @param {number} windSpeed
     * @param {number} clouds
     * @param {WeatherDescDto[]} desc
     */
    constructor(temperature, temperatureFeels, pressure, humidity, windSpeed, clouds, desc) {
        this.#temperature = temperature;
        this.#temperatureFeels = temperatureFeels;
        this.#pressure = pressure;
        this.#humidity = humidity;
        this.#windSpeed = windSpeed;
        this.#clouds = clouds;
        this.#desc = desc;
    }

    /**
     * @returns {number}
     */
    get temperature() {
        return this.#temperature;
    }

    /**
     * @returns {number}
     */
    get temperatureFeels() {
        return this.#temperatureFeels;
    }

    /**
     * @returns {number}
     */
    get pressure() {
        return this.#pressure;
    }

    /**
     * @returns {number}
     */
    get humidity() {
        return this.#humidity;
    }

    /**
     * @returns {number}
     */
    get windSpeed() {
        return this.#windSpeed;
    }

    /**
     * @returns {number}
     */
    get clouds() {
        return this.#clouds;
    }

    /**
     * @returns {WeatherDescDto[]}
     */
    get desc() {
        return this.#desc;
    }
}
