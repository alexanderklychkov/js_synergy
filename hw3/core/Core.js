export default class Core {
    constructor(props) {
        this._root = props.root;
        this._components = props.components;
    }

    start() {
        this._initComponents();
    }

    _initComponents() {
        [this._root, ...this._components].forEach((component) => component.render());
    }
}