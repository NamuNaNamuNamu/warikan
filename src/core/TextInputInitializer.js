import { textInputs } from "../inputs/textInputs.js";

class TextInputInitializer {
    initializeAll () {
        for (const input of textInputs) {
            input.initialize();
        }
    }
}

export const textInputInitializer = new TextInputInitializer();