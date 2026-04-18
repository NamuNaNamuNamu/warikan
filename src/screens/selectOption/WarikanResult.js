import { PayerCategory } from "../../enum/PayerCategory.js";
import { animateNumber } from "../../utils/animateNumber.js";

class WarikanResult {
    #getResultRowElements () {
        return {
            [PayerCategory.PAY_A_LOT.html]: document.querySelector(`[data-result-row].${PayerCategory.PAY_A_LOT.html}`),
            [PayerCategory.PAY_A_LITTLE.html]: document.querySelector(`[data-result-row].${PayerCategory.PAY_A_LITTLE.html}`),
            [PayerCategory.SETTLER.html]: document.querySelector(`[data-result-row].${PayerCategory.SETTLER.html}`),
            [PayerCategory.NORMAL.html]: document.querySelector(`[data-result-row].${PayerCategory.NORMAL.html}`),
            [PayerCategory.NORMAL_ADJUSTER.html]: document.querySelector(`[data-result-row].${PayerCategory.NORMAL_ADJUSTER.html}`)
        }
    }

    #getResultRowElement (payerCategory) {
        return this.#getResultRowElements()[payerCategory.html];
    }

    updateValue ({ payerCategory, resultHtmlElement, value, isAnimated = false }) {
        const htmlElement = this.#getResultRowElement(payerCategory).querySelector(`.${resultHtmlElement.html}`);
        
        if (isAnimated) {
            this.#animateNumber (htmlElement, value);
            return;
        }

        htmlElement.innerHTML = value;
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

    hideAll() {
        for (const element of Object.values(this.#getResultRowElements())) {
            element.classList.remove("is-active");
        }
    }

    display(payerCategory) {
        this.#getResultRowElement(payerCategory).classList.add("is-active");
    }
}

export const warikanResult = new WarikanResult();