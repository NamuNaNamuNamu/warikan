import { inputNumPeople } from "../inputs/inputNumPeople.js";
import { inputTotalAmount } from "../inputs/inputTotalAmount.js";
import { inputAmountPayALittle } from "../inputs/inputAmountPayALittle.js";
import { inputAmountPayALot } from "../inputs/inputAmountPayALot.js";
import { inputMaximumAppreciationAmount } from "../inputs/inputMaximumAppreciationAmount.js";
import { inputNumPeoplePayALittle } from "../inputs/inputNumPeoplePayALittle.js";
import { inputNumPeoplePayALot } from "../inputs/inputNumPeoplePayALot.js";

class TextInputBinder {
    #textInputs = [
        inputTotalAmount,
        inputNumPeople,

        inputMaximumAppreciationAmount,
        inputAmountPayALot,
        inputNumPeoplePayALot,
        inputAmountPayALittle,
        inputNumPeoplePayALittle
    ];

    bindAll () {
        for (const input of this.#textInputs) {
            input.startReceivingInput();
        }
    }
}

export const textInputBinder = new TextInputBinder();