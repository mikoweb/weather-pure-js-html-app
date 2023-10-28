export default class Template {
    #templatePath;
    #template;
    #loaded = false;

    constructor(templatePath) {
        this.#templatePath = templatePath;
    }

    async init() {
        const templateResponse = await fetch(this.#templatePath);
        const text = await templateResponse.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        this.#template = doc.querySelector('template');
        this.#loaded = true;
    }

    async initOnce() {
        if (!this.#loaded) {
            await this.init();
        }
    }

    /**
     * @param {Function|null} transform
     * @returns {Node}
     */
    render(transform = null) {
        const template = this.#template.content.cloneNode(true);

        if (transform) {
            transform(template);
        }

        return template;
    }
}
