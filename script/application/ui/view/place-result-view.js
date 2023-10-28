import View from '../view.js';
import PlaceItemBehavior from '../behavior/place-item-behavior.js';

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

            const item = node.querySelector('.app-place-item');
            item.dataset.lat = place.lat.toString();
            item.dataset.lon = place.lon.toString();
            new PlaceItemBehavior(item);
            this._el.appendChild(item);
        }
    }
}
