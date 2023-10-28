export default class WeatherDescDto {
    #name;
    #description;

    /**
     * @param {string} name
     * @param {string} description
     */
    constructor(name, description) {
        this.#name = name;
        this.#description = description;
    }

    /**
     * @returns {string}
     */
    get name() {
        return this.#name;
    }

    /**
     * @returns {string}
     */
    get description() {
        return this.#description;
    }
}
