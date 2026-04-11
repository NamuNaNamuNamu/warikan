import { inputNumPeople } from "../inputs/inputNumPeople.js";
import { inputTotalAmount } from "../inputs/inputTotalAmount.js";
import { inputAmountPayALittle } from "../inputs/inputAmountPayALittle.js";
import { inputAmountPayALot } from "../inputs/inputAmountPayALot.js";
import { inputMaximumAppreciationAmount } from "../inputs/inputMaximumAppreciationAmount.js";
import { inputNumPeoplePayALittle } from "../inputs/inputNumPeoplePayALittle.js";
import { inputNumPeoplePayALot } from "../inputs/inputNumPeoplePayALot.js";

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