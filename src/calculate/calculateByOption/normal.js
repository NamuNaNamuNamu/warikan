// 通常の計算方法

import { PayerCategory } from "../../enum/PayerCategory.js";
import { validate } from "./normal/validate.js";
import { ErrorArray } from "./shared/ErrorArray.js";
import { pruneExcessElementFrom } from "./shared/pruneExcessElementFrom.js";

export function normal(totalAmount, numberOfPeople){
    let result = [];
    let errors = new ErrorArray();

    errors.merge(validate(totalAmount, numberOfPeople));
    if (errors.isNotEmpty()) {
        return errors;
    }

    const minimumAmountPerPerson = Math.floor(totalAmount / numberOfPeople);
    const remainder = totalAmount - minimumAmountPerPerson * numberOfPeople;

    result.push(
        {
            payerCategory: PayerCategory.NORMAL_ADJUSTER,
            amount: minimumAmountPerPerson + 1,
            numberOfPeople: remainder
        },
        {
            payerCategory: PayerCategory.NORMAL,
            amount: minimumAmountPerPerson,
            numberOfPeople: numberOfPeople - remainder
        }
    );

    return pruneExcessElementFrom(result); 
}