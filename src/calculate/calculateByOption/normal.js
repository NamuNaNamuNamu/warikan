// 通常の計算方法

import { payerCategory } from "../../enum/payerCategory.js";
import { pruneExcessElementFrom } from "./normal/helpers.js";

export function normal(totalAmount, numberOfPeople){
    let result = [];

    const minimumAmountPerPerson = Math.floor(totalAmount / numberOfPeople);
    const remainder = totalAmount - minimumAmountPerPerson * numberOfPeople;

    result.push(
        {
            payerCategory: payerCategory.normal,
            amount: minimumAmountPerPerson + 1,
            numberOfPeople: remainder
        },
        {
            payerCategory: payerCategory.normal,
            amount: minimumAmountPerPerson,
            numberOfPeople: numberOfPeople - remainder
        }
    );

    return pruneExcessElementFrom(result); 
}