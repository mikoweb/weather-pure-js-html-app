import Template from './template.js';

export default class View {
    _el;
    _template;

    /**
     * @param {Element} el
     */
    constructor(el) {
        this._el = el;
        this._template = new Template(this.templatePath);
    }

    get templatePath() {
        throw new Error('No template path defined!');
    }

    /**
     * @param {*} data
     * @returns {Promise<void>}
     */
    async render(data) {
        this.reset();
        await this._template.initOnce();
        await this.renderTemplate(data);
    }

    /**
     * @param {*} data
     * @returns {Promise<void>}
     */
    async renderTemplate(data) {}

    reset() {
        this._el.innerHTML = '';
    }
}
