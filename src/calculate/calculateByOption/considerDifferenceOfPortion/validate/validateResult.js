// 算出された結果に対して以下をチェック
// - 多く払う人の額 > ノーマルの額 > 少なく払う人の額 になっていること

import { ErrorArray } from "../../helpers/ErrorArray.js";
import { payerCategory } from "../../../../enum/PayerCategory.js";

export function validateResult(result) {
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