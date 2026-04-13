import { resultFormatter } from "../controller/ResultFormatter.js";
import { getPayerCategories, getPayerCategoryKey } from "../enum/PayerCategory.js";
import { WarikanTerm } from "../enum/WarikanTerm.js";
import { warikanResult } from "../screens/selectOption/WarikanResult.js";

class CalculationResultRenderer {
    render (result) {
        const formattedResult = resultFormatter.format(result);

        const payerCategoryKeys = Object.keys(formattedResult);
        const payerCategories = getPayerCategories(payerCategoryKeys);

        for (const payerCategory of payerCategories) {
            const element = warikanResult.getHtmlElement(payerCategory);
            element.querySelector(`.${WarikanTerm.AMOUNT.html}`).innerHTML = formattedResult[getPayerCategoryKey(payerCategory)].amount;
            element.querySelector(`.${WarikanTerm.NUM_PEOPLE.html}`).innerHTML = formattedResult[getPayerCategoryKey(payerCategory)].numberOfPeople;
        }

        warikanResult.display(payerCategories);
    }
}

export const calculationResultRenderer = new CalculationResultRenderer();