import { textInputs } from "../inputs/textInputs.js";

class TextInputBinder {
    bindAll () {
        for (const input of textInputs) {
            input.startReceivingInput();
        }
    }
}

export const textInputBinder = new TextInputBinder();