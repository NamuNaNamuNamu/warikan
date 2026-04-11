import { inputNumPeople } from "../screens/input/inputNumPeople.js";
import { inputTotalAmount } from "../screens/input/inputTotalAmount.js";
import { warikanContext } from "../state/WarikanContext/WarikanContext.js";

class WarikanContextExtractor {
    extractFromInputScreen () {
        const totalAmount = Number(inputTotalAmount.getText());
        const numPeople = Number(inputNumPeople.getText());

        warikanContext.setTotalAmount(totalAmount);
        warikanContext.setNumPeople(numPeople);
    }
}

export const warikanContextExtractor = new WarikanContextExtractor();