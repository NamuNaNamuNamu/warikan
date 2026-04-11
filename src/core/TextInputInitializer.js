import { inputNumPeople } from "../screens/input/inputNumPeople.js";
import { inputTotalAmount } from "../screens/input/inputTotalAmount.js";
import { inputAmountPayALittle } from "../screens/selectOption/inputAmountPayALittle.js";
import { inputAmountPayALot } from "../screens/selectOption/inputAmountPayALot.js";
import { inputMaximumAppreciationAmount } from "../screens/selectOption/inputMaximumAppreciationAmount.js";
import { inputNumPeoplePayALittle } from "../screens/selectOption/inputNumPeoplePayALittle.js";
import { inputNumPeoplePayALot } from "../screens/selectOption/inputNumPeoplePayALot.js";

class TextInputInitializer {
    #textInputs = [
        inputTotalAmount,
        inputNumPeople,

        inputMaximumAppreciationAmount,
        inputAmountPayALot,
        inputNumPeoplePayALot,
        inputAmountPayALittle,
        inputNumPeoplePayALittle
    ];

    initializeAll () {
        for (const input of this.#textInputs) {
            input.initialize();
        }
    }
}

export const textInputInitializer = new TextInputInitializer();