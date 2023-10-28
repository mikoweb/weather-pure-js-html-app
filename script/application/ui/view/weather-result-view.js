import View from '../view.js';

export default class WeatherResultView extends View {
    get templatePath() {
        return '/template/weather.html';
    }

    /**
     * @param {WeatherDto} weather
     * @returns {Promise<void>}
     */
    async renderTemplate(weather) {
        const node = this._template.render((node) => {
            let feature = '';
            for (const desc of weather.desc) {
                feature += `${desc.description}, `;
            }

            node.querySelector('.app-weather__temperature').textContent = weather.temperature;
            node.querySelector('.app-weather__feels').textContent = weather.temperatureFeels;
            node.querySelector('.app-weather__pressure').textContent = weather.pressure;
            node.querySelector('.app-weather__humidity').textContent = weather.humidity;
            node.querySelector('.app-weather__wind-speed').textContent = weather.windSpeed;
            node.querySelector('.app-weather__clouds').textContent = weather.clouds;
            node.querySelector('.app-weather__features').textContent = feature.substring(0, feature.length - 2);
        });

        this._el.appendChild(node);
    }
}
