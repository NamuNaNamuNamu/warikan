import titleHTML from './../screens/title.html?raw'
import inputHTML from './../screens/input.html?raw'
import selectOptionHTML from './../screens/selectOption.html?raw'

export class ScreenManager {
    constructor() {
        this.screens = {
            title: document.getElementById("screen-title"),
            input: document.getElementById("screen-input"),
            selectOption: document.getElementById("screen-selectOption")
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

            if (button.id === "temp-move-to-screen-input") {
                this.#changeScreenTo(this.screens.input);
            } else if (button.id === "temp-back-to-screen-title") {
                this.#changeScreenTo(this.screens.title);
            } else if (button.id === "temp-move-to-screen-selectOption") {
                this.#changeScreenTo(this.screens.selectOption);
            } else if (button.id === "temp-back-to-screen-input") {
                this.#changeScreenTo(this.screens.input);
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