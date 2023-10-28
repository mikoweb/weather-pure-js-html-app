import View from '../view.js';

export default class PlaceResultView extends View {
    get templatePath() {
        return '/template/place-item.html';
    }

    /**
     * @param {PlaceDto[]} places
     */
    async renderTemplate(places) {
        await super.renderTemplate(places);

        for (const place of places) {
            this.#renderPlace(place);
        }
    }

    /**
     * @param {PlaceDto} place
     */
    #renderPlace(place) {
        if (place.localName) {
            const node = this._template.render((node) => {
                node.querySelector('.app-place-item__name').textContent =
                    `${place.localName} (${place.country}) - [${place.lat.toFixed(3)}, ${place.lon.toFixed(3)}]`;
            });

            this._el.appendChild(node);
        }
    }
}
