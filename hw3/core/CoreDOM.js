export default class CoreDOM {
    static _root = null;

    static createRoot(htmlElem) {
        this._root = htmlElem;
        return this;
    }

    static render(html) {
        this._root.innerHTML = html;
    }

    static renderComponent(component) {
        component._beforeMount(component._props);
        return component.render();
    }
}