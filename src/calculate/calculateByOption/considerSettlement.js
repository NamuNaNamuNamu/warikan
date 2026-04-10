// 精算をする人が少し得をする計算方法
// TODO: test\calculate\calculateByOption\considerSettlement.test.js の結果が通るように要修正

import { PayerCategory } from "../../enum/PayerCategory.js";
import { validate } from "./considerSettlement/validate.js";
import { ErrorArray } from "./shared/ErrorArray.js";
import { pruneExcessElementFrom } from "./shared/pruneExcessElementFrom.js";

export function considerSettlement(totalAmount, numberOfPeople, extra_info){
    let result = [];
    let errors = new ErrorArray();

    errors.merge(validate(totalAmount, numberOfPeople));
    if (errors.isNotEmpty()) {
        return errors;
    }

    const amountOfNormalPerPerson = Math.ceil(totalAmount / numberOfPeople / extra_info.minimumAppreciationAmount) * extra_info.minimumAppreciationAmount;
    const amountOfNormal = amountOfNormalPerPerson * (numberOfPeople - 1);
    const amountOfSettler = totalAmount - amountOfNormal;

    result.push(
        {
            payerCategory: PayerCategory.SETTLER,
            amount: amountOfSettler,
            numberOfPeople: 1
        },
        {
            payerCategory: PayerCategory.NORMAL,
            amount: amountOfNormalPerPerson,
            numberOfPeople: numberOfPeople - 1
        }
    );

    return pruneExcessElementFrom(result); 
}