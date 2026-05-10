import { resultFormatter } from "../controller/ResultFormatter.js";
import { getPayerCategory, getPayerCategoryKey, PayerCategory } from "../enum/PayerCategory.js";
import { getResultHtmlElement, ResultHtmlElement } from "../enum/ResultHtmlElement.js";
import { warikanResult } from "../screens/selectOption/WarikanResult.js";
import { hasSameElements } from "../utils/hasSameElements.js";

class CalculationResultRenderer {
    render (result) {
        const formattedResult = resultFormatter.format(result);
        const outputs = this.#getTextToDisplay(formattedResult);
        const payerCategoryKeys = Object.keys(outputs);

        warikanResult.hideAll();

        for (const payerCategoryKey of payerCategoryKeys) {
            for (const resultHtmlElementKey of Object.keys(outputs[payerCategoryKey])) {
                const payerCategory = getPayerCategory(payerCategoryKey);
                const resultHtmlElement = getResultHtmlElement(resultHtmlElementKey);

                warikanResult.display(payerCategory);
                warikanResult.updateValue({
                    payerCategory: payerCategory,
                    resultHtmlElement: resultHtmlElement,
                    value: outputs[payerCategoryKey][resultHtmlElementKey],
                    isAnimated: resultHtmlElement === ResultHtmlElement.AMOUNT ? true : false
                });
            }
        }
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
                [ResultHtmlElement.PAYER_CATEGORY.key]: payerCategory,
                [ResultHtmlElement.NUM_PEOPLE.key]: numPeople,
                [ResultHtmlElement.UNIT_NUM_PEOPLE.key]: unitNumPeople,
                [ResultHtmlElement.HA.key]: ha,
                [ResultHtmlElement.AMOUNT.key]: amount,
                [ResultHtmlElement.UNIT_AMOUNT.key]: unitAmount
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

        // WarikanOption.CONSIDER_DIFFERENCE_OF_PORTION
        if (hasSameElements(payerCategoryKeys, [
            getPayerCategoryKey(PayerCategory.PAY_A_LOT),
            getPayerCategoryKey(PayerCategory.NORMAL),
        ])) {
            return {
                [getPayerCategoryKey(PayerCategory.PAY_A_LOT)]: makeOutput({
                    payerCategory: PayerCategory.PAY_A_LOT.label,
                    numPeople: formattedResult[getPayerCategoryKey(PayerCategory.PAY_A_LOT)].numberOfPeople,
                    amount: formattedResult[getPayerCategoryKey(PayerCategory.PAY_A_LOT)].amount
                })
            }
        }

        console.error(formattedResult);
        throw Error("想定外のワリカン結果出力パターンです。")
    }
}

export const calculationResultRenderer = new CalculationResultRenderer();