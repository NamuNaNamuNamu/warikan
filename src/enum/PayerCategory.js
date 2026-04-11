export const PayerCategory = Object.freeze({
    NORMAL: {
        label: "普通に払う人"
    },
    NORMAL_ADJUSTER: {
        label: "端数分多く払う人"
    },
    SETTLER: {
        label: "精算係"
    },
    PAY_A_LOT: {
        label: "多く払う人"
    },
    PAY_A_LITTLE: {
        label: "少なく払う人"
    }
});

const PayerCategoryKey = Object.freeze({
    normal,
    normalAdjuster,
    settler,
    payALittle,
    payALot
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