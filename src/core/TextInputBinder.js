import { inputNumPeople } from "../screens/input/inputNumPeople.js";
import { inputTotalAmount } from "../screens/input/inputTotalAmount.js";

class TextInputBinder {
    #textInputs = [
        inputTotalAmount,
        inputNumPeople
    ];

    bindAll () {
        for (const input of this.#textInputs) {
            input.startReceivingInput();
        }
    }
}

export const textInputBinder = new TextInputBinder();