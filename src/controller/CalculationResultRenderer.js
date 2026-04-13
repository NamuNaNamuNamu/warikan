import { resultFormatter } from "../controller/ResultFormatter.js";
import { getPayerCategories, getPayerCategoryKey } from "../enum/PayerCategory.js";
import { WarikanTerm } from "../enum/WarikanTerm.js";
import { warikanResult } from "../screens/selectOption/WarikanResult.js";
import { animateNumber } from "../utils/animateNumber.js";

class CalculationResultRenderer {
    render (result) {
        const formattedResult = resultFormatter.format(result);

        const payerCategoryKeys = Object.keys(formattedResult);
        const payerCategories = getPayerCategories(payerCategoryKeys);

        for (const payerCategory of payerCategories) {
            const element = warikanResult.getHtmlElement(payerCategory);
            const numPeopleElement = element.querySelector(`.${WarikanTerm.NUM_PEOPLE.html}`);
            const amountElement = element.querySelector(`.${WarikanTerm.AMOUNT.html}`);
            const payerCategoryKey = getPayerCategoryKey(payerCategory);
            
            this.#renderHtml({ updateTarget: amountElement, updatedNumber: formattedResult[payerCategoryKey].amount, isAnimated: true });
            this.#renderHtml({ updateTarget: numPeopleElement, updatedNumber: formattedResult[payerCategoryKey].numberOfPeople });
        }

        warikanResult.display(payerCategories);
    }

    #renderHtml ({ updateTarget, updatedNumber, isAnimated = false }) {
        if (isAnimated) {
            this.#animateNumber (updateTarget, updatedNumber);
            return;
        }
            
        updateTarget.innerHTML = updatedNumber;
    }

    #animateNumber (updateTarget, updatedNumber) {
        const start = Number(updateTarget.innerHTML);

        if (!Number.isFinite(start)) {
            updateTarget.innerHTML = updatedNumber;
            return;
        }

        animateNumber({
            start: start,
            end: updatedNumber,
            duration: 700,
            onUpdate: (value) => {
                updateTarget.innerHTML = value;
            }
        });
    }
}

export const calculationResultRenderer = new CalculationResultRenderer();