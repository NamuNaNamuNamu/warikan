import { normal } from "../../../src/calculate/calculateByOption/normal.js";
import { payerCategory } from "../../../src/enum/payerCategory.js"; 

describe("通常の計算方法のテスト", () => {
    test("割り切れないパターン", () => {
        let totalAmount = 10000;
        let numberOfPeople = 3;
        
        const result = normal(totalAmount, numberOfPeople);
        expect(result).toEqual([
            {
                payerCategory: payerCategory.normal,
                amount: 3334,
                numberOfPeople: 1
            },
            {
                payerCategory: payerCategory.normal,
                amount: 3333,
                numberOfPeople: 2
            }
        ]);
    });

    test("割り切れるパターン", () => {
        let totalAmount = 16000;
        let numberOfPeople = 4;
        
        const result = normal(totalAmount, numberOfPeople);
        expect(result).toEqual([
            {
                payerCategory: payerCategory.normal,
                amount: 4000,
                numberOfPeople: 4
            }
        ]);
    });
});