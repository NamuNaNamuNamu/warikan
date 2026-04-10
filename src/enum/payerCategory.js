export const payerCategory = Object.freeze({
    normal: 0,
    settler: 1,
    payALot: 2,
    payALittle: 3
});

// TODO: feature/additional_function で enhanced-enum ブランチを取り込んだらこちらに置き換える。
export const PayerCategoryReplaced = Object.freeze({
    NORMAL: {
        label: "普通に払う人"
    },
    NORMAL_ADJUSTER: { // TODO: 特にこのオプションが増えているので要注意。feature/additional_function で修正を入れる。
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