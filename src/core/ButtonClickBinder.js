import { nextButton } from "../screens/input/nextButton.js";
import { finishButton } from "../screens/selectOption/finishButton.js";
import { startButton } from "../screens/title/startButton.js";

class ButtonClickBinder {
    #buttons = [
        startButton,
        nextButton,
        finishButton
    ];

    bindAll () {
        for (const button of this.#buttons) {
            button.startReceivingClick();
        }
    }
}

export const buttonClickBinder = new ButtonClickBinder();