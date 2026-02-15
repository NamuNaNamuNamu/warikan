// 結果算出の前にチェックできる以下をチェック
// - 会計金額が1円以上であることのチェック
// - 人数が1人以上であることのチェック

import { ErrorArray } from "../helpers/errorArray.js";

export function validate(totalAmount, numberOfPeople) {
    let errors = new ErrorArray();

    if (totalAmount < 1) {
        errors.push("通常の計算方法 > message: 会計金額が1円未満になっています。");
    }

    if (numberOfPeople < 1) {
        errors.push("通常の計算方法 > message: 人数が1人未満になっています。");
    }

    return errors;
}