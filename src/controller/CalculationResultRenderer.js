import { resultFormatter } from "../controller/ResultFormatter.js";
import { warikanResult } from "../screens/selectOption/WarikanResult.js";

class CalculationResultRenderer {
    render (result) {
        const formattedResult = resultFormatter.format(result);
        warikanResult.render(formattedResult);
    }
}

export const calculationResultRenderer = new CalculationResultRenderer();