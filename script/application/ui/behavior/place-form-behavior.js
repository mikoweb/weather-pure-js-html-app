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
        this.#initForm();
    }

    /**
     * @returns {HTMLInputElement}
     */
    #getQueryInput() {
        return this.#el.querySelector('.app-place-form__place-input');
    }

    /**
     * @returns {HTMLFormElement}
     */
    #getForm() {
        return this.#el.querySelector('form');
    }

    #initQueryInput() {
        const input = this.#getQueryInput();
        this.#loadQuery(input.value);

        input.addEventListener('input', (event) => {
            this.#loadQuery(event.target.value);
        });
    }

    #initForm() {
        const form = this.#getForm();

        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
    }

    /**
     * @param {string} value
     */
    #loadQuery(value) {
        if (value.length > 2) {
            if (this.#queryController !== null) {
                this.#queryController.abort();
            }

            this.#queryController = new AbortController();
            const promise = FindPlaceQuery.findPlace(value, this.#queryController.signal);

            promise.then((places) => {
                LoadPlaceResultCommand.execute(places);
            }).catch(() => {});
        } else {
            LoadPlaceResultCommand.execute([]);
        }
    }
}
