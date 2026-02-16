// 精算をする人が少し得をする計算方法
// TODO: test\calculate\calculateByOption\considerSettlement.test.js の結果が通るように要修正

import { payerCategory } from "../../enum/payerCategory.js";

export function considerSettlement(totalAmount, numberOfPeople, extra_info){
    let result = [];

    const amountOfNormalPerPerson = Math.ceil(totalAmount / numberOfPeople / extra_info.minimumAppreciationAmount) * extra_info.minimumAppreciationAmount;
    const amountOfNormal = amountOfNormalPerPerson * (numberOfPeople - 1);
    const amountOfSettler = totalAmount - amountOfNormal;

    result.push(
        {
            payerCategory: payerCategory.settler,
            amount: amountOfSettler,
            numberOfPeople: 1
        },
        {
            payerCategory: payerCategory.normal,
            amount: amountOfNormalPerPerson,
            numberOfPeople: numberOfPeople - 1
        }
    );

    return result; 
}