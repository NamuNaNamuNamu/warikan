export const calculateOption = Object.freeze({
    normal: 0,
    considerSettlement: 1,
    considerDifferenceOfPortion: 2,
});

// TODO: feature/additional_function で enhanced-enum ブランチを取り込んだらこちらに置き換える。
export const CalculateOptionReplaced = Object.freeze({
    NORMAL: {
        label: "通常計算",
        description: "通常の計算方法"
    },
    CONSIDER_SETTLEMENT: {
        label: "精算係ありがとうオプション",
        description: "精算をする人が少し得をする計算方法"
    },
    CONSIDER_DIFFERENCE_OF_PORTION: {
        label: "飲食量考慮オプション",
        description: "食べた量によって最大3段階まで支払い量に差をつけられる計算方法"
    }
});