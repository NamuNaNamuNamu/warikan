import { inputNumPeople } from "../screens/input/inputNumPeople.js";
import { inputTotalAmount } from "../screens/input/inputTotalAmount.js";
import { inputAmountPayALittle } from "../screens/selectOption/inputAmountPayALittle.js";
import { inputAmountPayALot } from "../screens/selectOption/inputAmountPayALot.js";
import { inputMaximumAppreciationAmount } from "../screens/selectOption/inputMaximumAppreciationAmount.js";
import { inputNumPeoplePayALittle } from "../screens/selectOption/inputNumPeoplePayALittle.js";
import { inputNumPeoplePayALot } from "../screens/selectOption/inputNumPeoplePayALot.js";
import { warikanContext } from "../state/WarikanContext/WarikanContext.js";

class WarikanContextExtractor {
    extractFromInputScreen () {
        const totalAmount = Number(inputTotalAmount.getText());
        const numPeople = Number(inputNumPeople.getText());

        warikanContext.setTotalAmount(totalAmount);
        warikanContext.setNumPeople(numPeople);
    }

    extractMaximumAppreciationAmount () {
        const maximumAppreciationAmount = Number(inputMaximumAppreciationAmount.getText());
        warikanContext.setMaximumAppreciationAmount(maximumAppreciationAmount);
    }

    extractAmountPayALot () {
        const amountPayALot = Number(inputAmountPayALot.getText());
        warikanContext.setAmountPayALot(amountPayALot);
    }

    extractNumPeoplePayALot () {
        const numPeoplePayALot = Number(inputNumPeoplePayALot.getText());
        warikanContext.setNumPeoplePayALot(numPeoplePayALot);
    }

    extractAmountPayALittle () {
        const amountPayALittle = Number(inputAmountPayALittle.getText());
        warikanContext.setAmountPayALittle(amountPayALittle);
    }

    extractNumPeoplePayALittle () {
        const numPeoplePayALittle = Number(inputNumPeoplePayALittle.getText());
        warikanContext.setNumPeoplePayALittle(numPeoplePayALittle);
    }
}

export const warikanContextExtractor = new WarikanContextExtractor();