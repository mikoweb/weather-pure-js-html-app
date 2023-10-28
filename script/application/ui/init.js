import PlaceFormBehavior from './behavior/place-form-behavior.js';
import PlaceResultView from './view/place-result-view.js';

export const views = {};

function init() {
    new PlaceFormBehavior(document.querySelector('.app-place-form'));
    views.placeResult = new PlaceResultView(document.querySelector('.app-place-result'));
}

export default init;
