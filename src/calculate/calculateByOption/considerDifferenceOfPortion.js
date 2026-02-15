// 食べた量によって最大3段階まで支払い量に差をつけられる計算方法

import { ErrorArray } from "./helpers/errorArray.js";
import { validate1 } from "./considerDifferenceOfPortion/validate/validate1.js";
import { validate2 } from "./considerDifferenceOfPortion/validate/validate2.js";
import { updateRemainderPayALot } from "./considerDifferenceOfPortion/helpers.js";
import { updateRemainderPayALittle } from "./considerDifferenceOfPortion/helpers.js";
import { getResultPayALot } from "./considerDifferenceOfPortion/helpers.js";
import { getResultPayALittle } from "./considerDifferenceOfPortion/helpers.js";
import { normal } from "./normal.js";

export function considerDifferenceOfPortion(totalAmount, numberOfPeople, _extra_info){
    let result = [];
    let errors = new ErrorArray();

    let remainder = {
        amount: totalAmount,
        numberOfPeople: numberOfPeople
    };

    errors.merge(validate1(totalAmount, numberOfPeople, extra_info));
    if (errors.isNotEmpty()) {
        return errors;
    }

    updateRemainderPayALot(remainder, extra_info);
    result.push(getResultPayALot(extra_info));

    updateRemainderPayALittle(remainder, extra_info);
    result.push(getResultPayALittle(extra_info));

    // 残りをノーマルの計算方法で算出
    result = result.concat(normal(remainder.amount, remainder.numberOfPeople));

    errors.merge(validate2(result));
    if (errors.isNotEmpty()) {
        return errors;
    }

    return result;
}