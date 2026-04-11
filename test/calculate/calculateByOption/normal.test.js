import { normal } from "../../../src/calculate/calculateByOption/normal.js";
import { ErrorArray } from "../../../src/calculate/calculateByOption/shared/ErrorArray.js";
import { PayerCategory } from "../../../src/enum/PayerCategory.js"; 
import { WarikanOption } from "../../../src/enum/WarikanOption.js";

describe("通常の計算方法のテスト", () => {
    test("割り切れないパターン", () => {
        let totalAmount = 10000;
        let numberOfPeople = 3;
        
        const result = normal(totalAmount, numberOfPeople);
        expect(result).toEqual([
            {
                payerCategory: PayerCategory.NORMAL_ADJUSTER,
                amount: 3334,
                numberOfPeople: 1
            },
            {
                payerCategory: PayerCategory.NORMAL,
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
                payerCategory: PayerCategory.NORMAL,
                amount: 4000,
                numberOfPeople: 4
            }
        ]);
    });

    test("人数が0人のとき", () => {
        let totalAmount = 1000;
        let numberOfPeople = 0;

        let expectedErrors = new ErrorArray();
        expectedErrors.push(`${WarikanOption.NORMAL.label} > message: 人数が1人未満になっています。`);
        
        const errors = normal(totalAmount, numberOfPeople);
        expect(errors).toEqual(expectedErrors);
    });

    test("人数が1人のとき", () => {
        let totalAmount = 1000;
        let numberOfPeople = 1;
        
        const result = normal(totalAmount, numberOfPeople);
        expect(result).toEqual([
            {
                payerCategory: PayerCategory.NORMAL,
                amount: 1000,
                numberOfPeople: 1
            }
        ]);
    });

    test("金額が0円のとき", () => {
        let totalAmount = 0;
        let numberOfPeople = 3;

        let expectedErrors = new ErrorArray();
        expectedErrors.push(`${WarikanOption.NORMAL.label} > message: 会計金額が1円未満になっています。`);
        
        const errors = normal(totalAmount, numberOfPeople);
        expect(errors).toEqual(expectedErrors);
    });

    test("金額が1円のとき", () => {
        let totalAmount = 1;
        let numberOfPeople = 3;
        
        const result = normal(totalAmount, numberOfPeople);
        expect(result).toEqual([
            {
                payerCategory: PayerCategory.NORMAL_ADJUSTER,
                amount: 1,
                numberOfPeople: 1
            },
            {
                payerCategory: PayerCategory.NORMAL,
                amount: 0,
                numberOfPeople: 2
            }
        ]);
    });
});