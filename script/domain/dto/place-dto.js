export default class PlaceDto {
    #name;
    #localName;
    #lat;
    #lon;
    #country;
    #state;

    /**
     * @param {string} name
     * @param {string} localName
     * @param {number} lat
     * @param {number} lon
     * @param {string} country
     * @param {string} state
     */
    constructor(name, localName, lat, lon, country, state) {
        this.#name = name;
        this.#localName = localName;
        this.#lat = lat;
        this.#lon = lon;
        this.#country = country;
        this.#state = state;
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
    get localName() {
        return this.#localName;
    }

    /**
     * @returns {number}
     */
    get lat() {
        return this.#lat;
    }

    /**
     * @returns {number}
     */
    get lon() {
        return this.#lon;
    }

    /**
     * @returns {string}
     */
    get country() {
        return this.#country;
    }

    /**
     * @returns {string}
     */
    get state() {
        return this.#state;
    }
}
