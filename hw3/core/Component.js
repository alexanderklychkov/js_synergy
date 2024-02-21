import { getProps } from './utils.js';

export default class Component {
    constructor(props) {
        this._data = props.data || {};
        this._template = props.template;
        this._selector = props.selector;
        this._events = props.events;
        this._el = null;
    }

    render() {
        this._initComponent();
        this._initEvents();
    }

    _initComponent() {
        this._el = document.querySelector(this._selector);
        this._el.innerHTML = this._parseTemplate();
    }

    _parseTemplate() {
        const props = getProps(this._el.getAttribute('props'));

        Object.keys(props).forEach((key) => {
            this._data[key] = props[key];
        });

        return this._template.replace(/\{{(.*?)}}/g, (str, key) => {
            const trimedKey = key.trim();
            if (trimedKey.includes('()')) {
                return this._data[trimedKey.split('()')[0]]();
            }

            return this._data[trimedKey]
        });
    }

    _initEvents() {
        if (!this._events) {
            return;
        }

        Object.entries(this._events).forEach(([key, callback]) => {
            const [listener, selector] = key.split(' ');

            Array.from(this._el.querySelectorAll(selector)).forEach((el) => {
                el.addEventListener(listener, this[callback].bind(this));
            });
        })
    }

    _changeData(key, value) {
        this._data[key] = value;
        this.render();
    }
}