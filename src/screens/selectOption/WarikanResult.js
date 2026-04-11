import { getPayerCategories, getPayerCategoryKey, PayerCategory } from "../../enum/PayerCategory.js";
import { WarikanTerm } from "../../enum/WarikanTerm.js";

class WarikanResult {
    #getHtmlElements () {
        return {
            [PayerCategory.PAY_A_LOT.html]: document.querySelector(`[data-result-row].${PayerCategory.PAY_A_LOT.html}`),
            [PayerCategory.PAY_A_LITTLE.html]: document.querySelector(`[data-result-row].${PayerCategory.PAY_A_LITTLE.html}`),
            [PayerCategory.SETTLER.html]: document.querySelector(`[data-result-row].${PayerCategory.SETTLER.html}`),
            [PayerCategory.NORMAL.html]: document.querySelector(`[data-result-row].${PayerCategory.NORMAL.html}`),
            [PayerCategory.NORMAL_ADJUSTER.html]: document.querySelector(`[data-result-row].${PayerCategory.NORMAL_ADJUSTER.html}`)
        }
    }

    #getHtmlElement (payerCategory) {
        return this.#getHtmlElements()[payerCategory.html];
    }

    #display(payerCategories) {
        for (const element of Object.values(this.#getHtmlElements())) {
            element.classList.remove("is-active");
        }

        for (const payerCategory of payerCategories) {
            this.#getHtmlElement(payerCategory).classList.add("is-active");
        }
    }

    render(result) {
        const payerCategoryKeys = Object.keys(result);
        const payerCategories = getPayerCategories(payerCategoryKeys);

        for (const payerCategory of payerCategories) {
            const element = this.#getHtmlElement(payerCategory);
            element.querySelector(`.${WarikanTerm.AMOUNT.html}`).innerHTML = result[getPayerCategoryKey(payerCategory)].amount;
            element.querySelector(`.${WarikanTerm.NUM_PEOPLE.html}`).innerHTML = result[getPayerCategoryKey(payerCategory)].numberOfPeople;
        }

        this.#display(payerCategories);
    }
}

export const warikanResult = new WarikanResult();