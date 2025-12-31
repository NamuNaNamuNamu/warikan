// 食べた量によって最大3段階まで支払い量に差をつけられる計算方法

import { normal } from "./normal.js";

export function considerDifferenceOfPortion(totalAmount, numberOfPeople, _extra_info){
    let result = [];

    // 残りをノーマルの計算方法で算出
    result = result.concat(normal(totalAmount, numberOfPeople));
    return result;
}