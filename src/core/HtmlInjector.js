import titleHTML from './../screens/title/title.html?raw'
import inputHTML from './../screens/input/input.html?raw'
import selectOptionHTML from './../screens/selectOption/selectOption.html?raw'

class HtmlInjector {
    #jobs = [
        { html: titleHTML, targetId: "screen-title" },
        { html: inputHTML, targetId: "screen-input" },
        { html: selectOptionHTML, targetId: "screen-select-option" },
    ]

    injectAll () {
        for (const job of this.#jobs) {
            this.#inject({ html: job.html, targetHtmlElement: this.#getElement({ fromId: job.targetId }) });
        }
    }

    #inject ({ html, targetHtmlElement }) {
        targetHtmlElement.innerHTML = html;
    }

    #getElement ({ fromId }) {
        return document.getElementById(fromId);
    }
}

export const htmlInjector = new HtmlInjector();