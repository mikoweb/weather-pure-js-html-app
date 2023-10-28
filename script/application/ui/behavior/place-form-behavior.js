import FindPlaceQuery from '../../../infrastructure/query/find-place-query.js';
import LoadPlaceResultCommand from '../../command/load-place-result-command.js';

export default class PlaceFormBehavior {
    #el;
    #queryController;

    /**
     * @param {Element} el
     */
    constructor(el) {
        this.#el = el;
        this.#queryController = null;
        this.#init();
    }

    #init() {
        this.#initQueryInput();
    }

    /**
     * @returns {HTMLInputElement}
     */
    #getQueryInput() {
        return this.#el.querySelector('.app-place-form__place-input');
    }

    #initQueryInput() {
        const input = this.#getQueryInput();

        input.addEventListener('input', (event) => {
            const value = event.target.value;

            if (value.length > 2) {
                if (this.#queryController !== null) {
                    this.#queryController.abort();
                }

                this.#queryController = new AbortController();
                const promise = FindPlaceQuery.findPlace(event.target.value, this.#queryController.signal);

                promise.then((places) => {
                    LoadPlaceResultCommand.execute(places);
                }).catch(() => {});
            }
        });
    }
}
