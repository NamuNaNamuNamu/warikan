export const PayerCategory = Object.freeze({
    NORMAL: {
        label: "普通に払う人",
        html: "normal"
    },
    NORMAL_ADJUSTER: {
        label: "端数分多く払う人",
        html: "normal-adjuster"
    },
    SETTLER: {
        label: "精算係",
        html: "settler"
    },
    PAY_A_LOT: {
        label: "多く払う人",
        html: "pay-a-lot"
    },
    PAY_A_LITTLE: {
        label: "少なく払う人",
        html: "pay-a-little"
    }
});

const PayerCategoryKey = Object.freeze({
    normal: "normal",
    normalAdjuster: "normalAdjuster",
    settler: "settler",
    payALittle: "payALittle",
    payALot: "payALot"
});

// TODO: キー周りでごちゃごちゃしてきたので整理する。
export function getPayerCategoryKey (payerCategory) {
    if (payerCategory === PayerCategory.NORMAL) { return PayerCategoryKey.normal };
    if (payerCategory === PayerCategory.NORMAL_ADJUSTER) { return PayerCategoryKey.normalAdjuster };
    if (payerCategory === PayerCategory.SETTLER) { return PayerCategoryKey.settler };
    if (payerCategory === PayerCategory.PAY_A_LITTLE) { return PayerCategoryKey.payALittle };
    if (payerCategory === PayerCategory.PAY_A_LOT) { return PayerCategoryKey.payALot };
}

export function getPayerCategory (payerCategoryKey) {
    if (payerCategoryKey === PayerCategoryKey.normal ) { return PayerCategory.NORMAL };
    if (payerCategoryKey === PayerCategoryKey.normalAdjuster) { return PayerCategory.NORMAL_ADJUSTER };
    if (payerCategoryKey === PayerCategoryKey.settler) { return PayerCategory.SETTLER };
    if (payerCategoryKey === PayerCategoryKey.payALittle) { return PayerCategory.PAY_A_LITTLE };
    if (payerCategoryKey === PayerCategoryKey.payALot) { return PayerCategory.PAY_A_LOT };
}

export function getPayerCategories (payerCategoryKeys) {
    const payerCategories = [];

    for (const key of payerCategoryKeys) {
        payerCategories.push(getPayerCategory(key));
    }

    return payerCategories;
}