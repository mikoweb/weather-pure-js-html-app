import PlaceFormBehavior from './behavior/place-form-behavior.js';
import PlaceResultView from './view/place-result-view.js';
import WeatherResultView from './view/weather-result-view.js';

export const views = {};

function init() {
    views.weatherResult = new WeatherResultView(document.querySelector('.app-weather-result'));
    views.placeResult = new PlaceResultView(document.querySelector('.app-place-result'));
    new PlaceFormBehavior(document.querySelector('.app-place-form'));
}

export default init;
