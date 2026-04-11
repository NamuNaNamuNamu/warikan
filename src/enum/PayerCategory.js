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

export function getPayerCategoryKey (payerCategory) {
    if (payerCategory === PayerCategory.NORMAL) { return "normal" };
    if (payerCategory === PayerCategory.NORMAL_ADJUSTER) { return "normalAdjuster" };
    if (payerCategory === PayerCategory.SETTLER) { return "settler" };
    if (payerCategory === PayerCategory.PAY_A_LITTLE) { return "payALittle" };
    if (payerCategory === PayerCategory.PAY_A_LOT) { return "payALot" };
}