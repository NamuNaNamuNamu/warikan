import { resultFormatter } from "../controller/ResultFormatter.js";
import { getPayerCategories, getPayerCategory, getPayerCategoryKey, PayerCategory } from "../enum/PayerCategory.js";
import { warikanResult } from "../screens/selectOption/WarikanResult.js";
import { animateNumber } from "../utils/animateNumber.js";
import { hasSameElements } from "../utils/hasSameElements.js";

class CalculationResultRenderer {
    render (result) {
        const formattedResult = resultFormatter.format(result);
        const outputs = this.#getTextToDisplay(formattedResult);
        const payerCategoryKeys = Object.keys(outputs);

        for (const payerCategoryKey of payerCategoryKeys) {
            for (const key of Object.keys(outputs[payerCategoryKey])) {
                const payerCategory = getPayerCategory(payerCategoryKey);
                const element = warikanResult.getHtmlElement(payerCategory);
                const htmlClass = this.#toHtmlClassName(key);
                const htmlElement = element.querySelector(`.${htmlClass}`);
                
                this.#renderHtml({ updateTarget: htmlElement, updatedNumber: outputs[payerCategoryKey][key] });
            }
        }

        const payerCategories = getPayerCategories(payerCategoryKeys);
        warikanResult.display(payerCategories);
    }

    #getTextToDisplay (formattedResult) {
        const payerCategoryKeys = Object.keys(formattedResult);

        const makeOutput = ({
            payerCategory = "",
            numPeople = "",
            unitNumPeople = "人",
            ha = "は",
            amount = "",
            unitAmount = "円"
        }) => {
            return {
                payerCategory,
                numPeople,
                unitNumPeople,
                ha,
                amount,
                unitAmount
            };
        };

        // WarikanOption.NORMAL
        if (hasSameElements(payerCategoryKeys, [
            getPayerCategoryKey(PayerCategory.NORMAL)
        ])) {
            return {
                [getPayerCategoryKey(PayerCategory.NORMAL)]: makeOutput({
                    numPeople: formattedResult[getPayerCategoryKey(PayerCategory.NORMAL)].numberOfPeople,
                    amount: formattedResult[getPayerCategoryKey(PayerCategory.NORMAL)].amount
                })
            }
        }

        if (hasSameElements(payerCategoryKeys, [
            getPayerCategoryKey(PayerCategory.NORMAL),
            getPayerCategoryKey(PayerCategory.NORMAL_ADJUSTER)
        ])) {
            return {
                [getPayerCategoryKey(PayerCategory.NORMAL)]: makeOutput({
                    numPeople: formattedResult[getPayerCategoryKey(PayerCategory.NORMAL)].numberOfPeople,
                    amount: formattedResult[getPayerCategoryKey(PayerCategory.NORMAL)].amount
                }),
                [getPayerCategoryKey(PayerCategory.NORMAL_ADJUSTER)]: makeOutput({
                    numPeople: formattedResult[getPayerCategoryKey(PayerCategory.NORMAL_ADJUSTER)].numberOfPeople,
                    amount: formattedResult[getPayerCategoryKey(PayerCategory.NORMAL_ADJUSTER)].amount
                })
            }
        }

        // WarikanOption.CONSIDER_SETTLEMENT
        if (hasSameElements(payerCategoryKeys, [
            getPayerCategoryKey(PayerCategory.SETTLER)
        ])) {
            return {
                [getPayerCategoryKey(PayerCategory.SETTLER)]: makeOutput({
                    payerCategory: PayerCategory.SETTLER.label,
                    unitNumPeople: "",
                    amount: formattedResult[getPayerCategoryKey(PayerCategory.SETTLER)].amount
                })
            }
        }

        if (hasSameElements(payerCategoryKeys, [
            getPayerCategoryKey(PayerCategory.SETTLER),
            getPayerCategoryKey(PayerCategory.NORMAL)
        ])) {
            return {
                [getPayerCategoryKey(PayerCategory.SETTLER)]: makeOutput({
                    payerCategory: PayerCategory.SETTLER.label,
                    unitNumPeople: "",
                    amount: formattedResult[getPayerCategoryKey(PayerCategory.SETTLER)].amount
                }),
                [getPayerCategoryKey(PayerCategory.NORMAL)]: makeOutput({
                    numPeople: formattedResult[getPayerCategoryKey(PayerCategory.NORMAL)].numberOfPeople,
                    amount: formattedResult[getPayerCategoryKey(PayerCategory.NORMAL)].amount
                })
            }
        }
    }

    #toHtmlClassName (key) {
        const dict = {
            payerCategory: "payer-category",
            numPeople: "num-people",
            unitNumPeople: "unit-num-people",
            ha: "ha",
            amount: "amount",
            unitAmount: "unit-amount"
        }

        return dict[key];
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