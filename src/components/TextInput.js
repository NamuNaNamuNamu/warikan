export class TextInput {
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
        this.#getHtmlElement().value = "";
    }

    getText () {
        return this.#getHtmlElement().value;
    }

    startReceivingInput () {
        if (typeof this.#onChange !== "function") { return; }

        this.#getHtmlElement().addEventListener("input", () => {
            this.#onChange(this);
        });
    }
}