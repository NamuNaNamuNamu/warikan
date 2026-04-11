import { inputNumPeople } from "../inputs/inputNumPeople.js";
import { inputTotalAmount } from "../inputs/inputTotalAmount.js";
import { inputAmountPayALittle } from "../inputs/inputAmountPayALittle.js";
import { inputAmountPayALot } from "../inputs/inputAmountPayALot.js";
import { inputMaximumAppreciationAmount } from "../inputs/inputMaximumAppreciationAmount.js";
import { inputNumPeoplePayALittle } from "../inputs/inputNumPeoplePayALittle.js";
import { inputNumPeoplePayALot } from "../inputs/inputNumPeoplePayALot.js";
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