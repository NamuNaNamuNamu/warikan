export const ResultHtmlElement = Object.freeze({
    PAYER_CATEGORY: {
        key: "payerCategory",
        html: "payer-category"
    },
    NUM_PEOPLE: {
        key: "numPeople",
        html: "num-people"
    },
    UNIT_NUM_PEOPLE: {
        key: "unitNumPeople",
        html: "unit-num-people"
    },
    HA: {
        key: "ha",
        html: "ha"
    },
    AMOUNT: {
        key: "amount",
        html: "amount"
    },
    UNIT_AMOUNT: {
        key: "unitAmount",
        html: "unit-amount"
    },
});

export function getResultHtmlElement (key) {
    for (const resultHtmlElementKey of Object.keys(ResultHtmlElement)) {
        const resultHtmlElement = ResultHtmlElement[resultHtmlElementKey];

        if (key === resultHtmlElement.key) {
            return ResultHtmlElement[resultHtmlElementKey];
        }
    }
    
    throw Error(`キーが存在しません: ${key}`);
}