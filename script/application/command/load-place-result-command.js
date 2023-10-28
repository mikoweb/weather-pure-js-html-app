import { views } from '../ui/init.js';

export default class LoadPlaceResultCommand {
    /**
     * @param {PlaceDto[]} places
     */
    static async execute(places) {
        if (views.weatherResult) {
            await views.weatherResult.reset();
        }

        if (views.placeResult) {
            await views.placeResult.render(places);
        }
    }
}
