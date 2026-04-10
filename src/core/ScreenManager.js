import titleHTML from './../screens/title.html?raw'
import inputHTML from './../screens/input.html?raw'
import selectOptionHTML from './../screens/selectOption.html?raw'

export class ScreenManager {
    constructor() {
        this.screens = {
            title: document.getElementById("screen-title"),
            input: document.getElementById("screen-input"),
            selectOption: document.getElementById("screen-select-option")
        }
    }

    activate() {
        this.screens.title.innerHTML = titleHTML;
        this.screens.input.innerHTML = inputHTML;
        this.screens.selectOption.innerHTML = selectOptionHTML;

        this.#activateScreenChanging();
    }

    #activateScreenChanging() {
        document.addEventListener("click", (e) => {
            const button = e.target.closest("button");
            if (!button) return;

            if (button.id === "button-start") {
                this.#changeScreenTo(this.screens.input);
            } else if (button.id === "button-finish") {
                this.#changeScreenTo(this.screens.title);
            } else if (button.id === "button-next") {
                this.#changeScreenTo(this.screens.selectOption);
            } else {
                throw Error("想定されていないボタンIDを持つボタンが押されました。");
            }
        });
    }

    #changeScreenTo(screen) {
        document.querySelectorAll(".screen").forEach(element => {
            element.classList.remove("is-active");
        });

        screen.classList.add("is-active");
    }
}