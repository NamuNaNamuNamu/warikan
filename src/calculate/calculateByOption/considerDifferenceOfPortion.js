// 食べた量によって最大3段階まで支払い量に差をつけられる計算方法

import { payerCategory } from "../../enum/payerCategory.js";
import { normal } from "./normal.js";

export function considerDifferenceOfPortion(totalAmount, numberOfPeople, _extra_info){
    let result = [];
    let errors = new ErrorArray();
    // 例:
    // totalAmount = 16247 円
    // numberOfPeople = 5 人
    let remainder = {
        amount: totalAmount,
        numberOfPeople: numberOfPeople
    };

    // 0. 結果算出の前にチェックできる以下をチェック
    // - 多く払う人、少なく払う人の人数の合計が、総合計人数未満であることのチェック
    // - 多く払う人、少なく払う人の支払合計額が、総支払い額を超えないこと
    errors.merge(validate1(totalAmount, numberOfPeople, extra_info));
    if (errors.isNotEmpty()) {
        return errors;
    }

    // 1. 多く払う人
    //   1-1. 「多く払う人」の金額チェック。
    //     単純に totalAmount を numberOfPeople で割る。
    //     16247 ÷ 5 = 3249.4
    //     3249.4 より大きい整数、つまり 3250 円以上で額を設定する。
    //     例: 4000 円で 2 人
    //   1-2. 金額確定
    updateRemainderPayALot(remainder, extra_info);
    result.push(getResultPayALot(extra_info));

    // 2. 少なく払う人
    //   2-1. 「少なく払う人」の金額チェック。
    //     残った合計額を残った人数で割る。
    //     (16247 - 4000 × 2) ÷ (5 - 2) 
    //     = 8247 ÷ 3 = 2749
    //     2749 より小さい整数、つまり 2748 円以下で額を設定する。
    //     例: 2000 円で 1 人
    //   2-2. 金額確定
    updateRemainderPayALittle(remainder, extra_info);
    result.push(getResultPayALittle(extra_info));

    // 3. 残りをノーマルの計算方法で算出
    //   例:
    //   金額 ... 6247 円 (8247 - 2000 × 1)
    //   人数 ... 2 人 (3 - 1)
    result = result.concat(normal(remainder.amount, remainder.numberOfPeople));

    // 4. 算出された結果に対して以下をチェック
    // - 多く払う人の額 > ノーマルの額 > 少なく払う人の額 になっていること
    errors.merge(validate2(result));
    if (errors.isNotEmpty()) {
        return errors;
    }

    return result;
}

function validate1(totalAmount, numberOfPeople, extra_info) {
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

function validate2(result) {
    let errors = new ErrorArray();

    // 多く払う人の額 > ノーマルの額 > 少なく払う人の額 になっていること
    let payALotArray = [];
    let payALittleArray = [];
    let normalArray = [];

    const categorizeResult = () => {
        for (let resultElement of result) {
            if (resultElement.payerCategory === payerCategory.payALot) {
                payALotArray.push(resultElement);
            }
            else if (resultElement.payerCategory === payerCategory.payALittle) {
                payALittleArray.push(resultElement);
            }
            else {
                normalArray.push(resultElement);
            }
        }
    }
    categorizeResult();
    
    const checkPayALot = () => {
        for (let payALot of payALotArray) {
            for (let normal of normalArray) {
                if (payALot.amount <= normal.amount) {
                    errors.push("飲食量考慮オプション > message: 多く払う人の支払額が普通に支払う人の額を下回っています。");
                    return;
                }
            }
        }
    }
    const checkPayALittle = () => {
        for (let payALittle of payALittleArray) {
            for (let normal of normalArray) {
                if (payALittle.amount >= normal.amount) {
                    errors.push("飲食量考慮オプション > message: 少なく払う人の支払額が普通に支払う人の額を上回っています。");
                    return;
                }
            }
        }
    }
    checkPayALot(errors);
    checkPayALittle(errors);
    
    return errors;
}

function updateRemainderPayALot(remainder, extra_info) {
    remainder.amount -= extra_info.payALot.amount * extra_info.payALot.numberOfPeople;
    remainder.numberOfPeople -= extra_info.payALot.numberOfPeople;
}

function updateRemainderPayALittle(remainder, extra_info) {
    remainder.amount -= extra_info.payALittle.amount * extra_info.payALittle.numberOfPeople;
    remainder.numberOfPeople -= extra_info.payALittle.numberOfPeople;
}

function getResultPayALot(extra_info) {
    return {
        payerCategory: payerCategory.payALot,
        amount: extra_info.payALot.amount,
        numberOfPeople: extra_info.payALot.numberOfPeople
    }
}

function getResultPayALittle(extra_info) {
    return {
        payerCategory: payerCategory.payALittle,
        amount: extra_info.payALittle.amount,
        numberOfPeople: extra_info.payALittle.numberOfPeople
    }
}

class ErrorArray {
    constructor() {
        this.errors = [];
    }

    push(errorMsg) {
        this.errors.push(errorMsg);
    }

    merge(errorArray) {
        this.errors = this.errors.concat(errorArray.all());
    }

    all() {
        return this.errors;
    }

    isEmpty() {
        return this.errors.length === 0;
    }

    isNotEmpty() {
        return !this.isEmpty();
    }
}