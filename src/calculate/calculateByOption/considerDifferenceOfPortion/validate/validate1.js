// 結果算出の前にチェックできる以下をチェック
// - 多く払う人、少なく払う人の人数の合計が、総合計人数未満であることのチェック
// - 多く払う人、少なく払う人の支払合計額が、総支払い額を超えないこと

import { ErrorArray } from "../../helpers/errorArray.js";

export function validate1(totalAmount, numberOfPeople, extra_info) {
    let errors = new ErrorArray();

    // 1. 多く払う人、少なく払う人の人数の合計が、総合計人数未満であることのチェック
    if (numberOfPeople <= extra_info.payALot.numberOfPeople + extra_info.payALittle.numberOfPeople) {
        errors.push("飲食量考慮オプション > message: 多く払う人、少なく払う人の合計が総合計人数以上になっています。");
    }

    // 2. 多く払う人、少なく払う人の支払合計額が、総支払い額を超えないこと
    let amountByPayALot = extra_info.payALot.amount * extra_info.payALot.numberOfPeople;
    let amountByPayALittle = extra_info.payALittle.amount * extra_info.payALittle.numberOfPeople;
    if (totalAmount <= amountByPayALot + amountByPayALittle) {
        errors.push("飲食量考慮オプション > message: 多く払う人、少なく払う人の支払合計額が総支払い額以上になっています。");
    }

    return errors;
}