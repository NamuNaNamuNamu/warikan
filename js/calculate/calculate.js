// 結果を算出する
//
// input
// - 会計金額
// - 人数
// - 最大ありがとう額 (精算係ありがとうオプション付きの場合)
// - 
// output
// 以下の要素を持つ辞書の配列
// - その金額を払う人のカテゴリ
// - 金額
// - その金額を払う人数

import { calculateOption } from "../enum/calculateOption.js";
import { considerDifferenceOfPortion } from "./calculateByOption/considerDifferenceOfPortion.js";
import { considerSettlement } from "./calculateByOption/considerSettlement.js";
import { normal } from "./calculateByOption/normal.js";

export function calculate(totalAmount, numberOfPeople, option){
    switch (option) {
        case calculateOption.normal:
            return normal(totalAmount, numberOfPeople);
        case calculateOption.considerSettlement:
            return considerSettlement(totalAmount, numberOfPeople, );
        case calculateOption.considerDifferenceOfPortion:
            return considerDifferenceOfPortion();
        default:
            throw Error("Selected option is not defined.");
    }
}