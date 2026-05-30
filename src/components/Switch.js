export class Switch {
    #htmlElement
    #onChange

    constructor ({ htmlElement, onChange = null }) {
        this.#htmlElement = htmlElement;
        this.#onChange = onChange;
    }

    #getHtmlElement () {
        return this.#htmlElement();
    }

    initialize () {
        this.#getHtmlElement().checked = false;
    }

    getValue () {
        return this.#getHtmlElement().checked;
    }

    startReceivingChange () {
        if (typeof this.#onChange !== "function") { return; }

        this.#getHtmlElement().addEventListener("change", () => {
            this.#onChange(this);
        });
    }
}