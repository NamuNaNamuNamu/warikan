import titleHTML from './../screens/title.html?raw'
import inputHTML from './../screens/input.html?raw'
import selectOptionHTML from './../screens/selectOption.html?raw'

const HTMLElement = {
    title: document.getElementById("screen-title"),
    input: document.getElementById("screen-input"),
    selectOption: document.getElementById("screen-selectOption")
};

export class ScreenManager {
    constructor() {
        
    }

    activate() {
        HTMLElement.title.innerHTML = titleHTML;
        HTMLElement.input.innerHTML = inputHTML;
        HTMLElement.selectOption.innerHTML = selectOptionHTML;

        this.activateScreenChanging();
    }

    activateScreenChanging() {
        document.addEventListener("click", (e) => {
            const button = e.target.closest("button");
            if (!button) return;

            if (button.id === "temp-move-to-screen-input") {
                changeScreenTo(HTMLElement.input);
            } else if (button.id === "temp-back-to-screen-title") {
                changeScreenTo(HTMLElement.title);
            } else if (button.id === "temp-move-to-screen-selectOption") {
                changeScreenTo(HTMLElement.selectOption);
            } else if (button.id === "temp-back-to-screen-input") {
                changeScreenTo(HTMLElement.input);
            } else {
                throw Error("想定されていないボタンIDを持つボタンが押されました。");
            }
        });
    }
}

function changeScreenTo(screenHTMLElement) {
    document.querySelectorAll(".screen").forEach(element => {
        element.classList.remove("is-active");
    });

    screenHTMLElement.classList.add("is-active");
}