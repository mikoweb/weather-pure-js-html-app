import LoadWeatherCommand from '../../command/load-weather-command.js';

export default class PlaceItemBehavior {
    #el;

    /**
     * @param {Element} el
     */
    constructor(el) {
        this.#el = el;
        this.#init();
    }

    #init() {
        this.#el.addEventListener('click', (event) => {
            const item = this.#getItemElement(event.target);
            this.#setActive(item);
            LoadWeatherCommand.execute(
                parseFloat(item.dataset.lat),
                parseFloat(item.dataset.lon)
            );
        });
    }

    /**
     * @param {HTMLElement} element
     */
    #getItemElement(element) {
        return element.dataset.lat ? element : element.closest('.app-place-item');
    }

    /**
     * @param {HTMLElement} element
     */
    #getContainerElement(element) {
        return element.closest('.app-place-result');
    }

    /**
     * @param {HTMLElement} itemElement
     */
    #setActive(itemElement) {
        const container = this.#getContainerElement(itemElement);

        for (const item of container.querySelectorAll('.app-place-item')) {
            item.classList.remove('active');
        }

        itemElement.classList.add('active');
    }
}
