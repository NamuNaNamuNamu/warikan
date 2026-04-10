// 結果算出の前にチェックできる以下をチェック
// - 会計金額が1円以上であることのチェック
// - 人数が1人以上であることのチェック

import { CalculateOption } from "../../../enum/CalculateOption.js";
import { ErrorArray } from "../helpers/ErrorArray.js";

export function validate(totalAmount, numberOfPeople) {
    let errors = new ErrorArray();

    if (totalAmount < 1) {
        errors.push(`${CalculateOption.NORMAL.label} > message: 会計金額が1円未満になっています。`);
    }

    if (numberOfPeople < 1) {
        errors.push(`${CalculateOption.NORMAL.label} > message: 人数が1人未満になっています。`);
    }

    return errors;
}