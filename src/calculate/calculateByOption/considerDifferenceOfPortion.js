// 食べた量によって最大3段階まで支払い量に差をつけられる計算方法

import { normal } from "./normal.js";

export function considerDifferenceOfPortion(totalAmount, numberOfPeople, _extra_info){
    let result = [];
    // 例:
    // totalAmount = 16247 円
    // numberOfPeople = 5 人

    // 1. 多く払う人
    //   1-1. 「多く払う人」の金額チェック。
    //     単純に totalAmount を numberOfPeople で割る。
    //     16247 ÷ 5 = 3249.4
    //     3249.4 より大きい整数、つまり 3250 円以上で額を設定する。
    //     例: 4000 円で 2 人
    //   1-2. 金額確定
    // 2. 少なく払う人
    //   2-1. 「少なく払う人」の金額チェック。
    //     残った合計額を残った人数で割る。
    //     (16247 - 4000 × 2) ÷ (5 - 2) 
    //     = 8247 ÷ 3 = 2749
    //     2749 より小さい整数、つまり 2748 円以下で額を設定する。
    //     例: 2000 円で 1 人
    //   2-2. 金額確定
    // 3. 残りをノーマルの計算方法で算出
    //   例:
    //   金額 ... 6247 円 (8247 - 2000 × 1)
    //   人数 ... 2 人 (3 - 1)
    
    result = result.concat(normal(totalAmount, numberOfPeople));
    return result;
}