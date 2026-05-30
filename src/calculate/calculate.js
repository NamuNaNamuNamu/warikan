// 結果を算出する
//
// input
// - 会計金額
// - 人数
// - オプション
// - オプションに付随した追加情報
// output
// 以下の要素を持つ辞書の配列
// - その金額を払う人のカテゴリ
// - 金額
// - その金額を払う人数

import { WarikanOption } from "../enum/WarikanOption.js";
import { considerDifferenceOfPortion } from "./calculateByOption/considerDifferenceOfPortion.js";
import { considerSettlement } from "./calculateByOption/considerSettlement.js";
import { normal } from "./calculateByOption/normal.js";

export function calculate(totalAmount, numberOfPeople, option, extra_info){
    switch (option) {
        case WarikanOption.NORMAL:
            return normal(totalAmount, numberOfPeople);
        case WarikanOption.CONSIDER_SETTLEMENT:
            return considerSettlement(totalAmount, numberOfPeople, extra_info);
        case WarikanOption.CONSIDER_DIFFERENCE_OF_PORTION:
            return considerDifferenceOfPortion(totalAmount, numberOfPeople, extra_info);
        default:
            throw Error("Selected option is not defined.");
    }
}