export class Button {
    #htmlElement
    #onClick;

    constructor ({ htmlElement, onClick }) {
        this.#htmlElement = htmlElement;
        this.#onClick = onClick;
    }

    #getHtmlElement () {
        return this.#htmlElement();
    }

    startReceivingClick () {
        this.#getHtmlElement().addEventListener("click", this.#onClick);
    }
}