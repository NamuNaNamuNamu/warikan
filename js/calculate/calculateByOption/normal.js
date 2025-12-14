// 通常の計算方法

import { payerCategory } from "../../enum/payerCategory.js";

export function normal(totalAmount, numberOfPeople){
    let result = [];

    const minimumAmountPerPerson = Math.floor(totalAmount / numberOfPeople);
    const remainder = totalAmount - minimumAmountPerPerson * numberOfPeople;

    result.push(
        {
            payerCategory: payerCategory.payALot,
            amount: minimumAmountPerPerson + 1,
            numberOfPeople: remainder
        },
        {
            payerCategory: payerCategory.normal,
            amount: minimumAmountPerPerson,
            numberOfPeople: numberOfPeople - remainder
        }
    );

    return result; 
}