import { considerSettlement } from "../../../src/calculate/calculateByOption/considerSettlement.js";
import { ErrorArray } from "../../../src/calculate/calculateByOption/helpers/ErrorArray.js";
import { payerCategory } from "../../../src/enum/PayerCategory.js";

describe("精算係ありがとうオプションのテスト", () => {
    test("通常パターン1", () => {
        let totalAmount = 9248;
        let numberOfPeople = 3;
        let extra_info = {
            minimumAppreciationAmount: 100,
        }
        
        const result = considerSettlement(totalAmount, numberOfPeople, extra_info);
        expect(result).toEqual([
            {
                payerCategory: payerCategory.settler,
                amount: 3048,
                numberOfPeople: 1
            },
            {
                payerCategory: payerCategory.normal,
                amount: 3100,
                numberOfPeople: 2
            }
        ]);
    });

    test("通常パターン2", () => {
        let totalAmount = 7296;
        let numberOfPeople = 3;
        let extra_info = {
            minimumAppreciationAmount: 100,
        }
        
        const result = considerSettlement(totalAmount, numberOfPeople, extra_info);
        expect(result).toEqual([
            {
                payerCategory: payerCategory.settler,
                amount: 2296,
                numberOfPeople: 1
            },
            {
                payerCategory: payerCategory.normal,
                amount: 2500,
                numberOfPeople: 2
            }
        ]);
    });

    test("通常パターン3", () => {
        let totalAmount = 7296;
        let numberOfPeople = 3;
        let extra_info = {
            minimumAppreciationAmount: 200,
        }
        
        const result = considerSettlement(totalAmount, numberOfPeople, extra_info);
        expect(result).toEqual([
            {
                payerCategory: payerCategory.settler,
                amount: 2096,
                numberOfPeople: 1
            },
            {
                payerCategory: payerCategory.normal,
                amount: 2600,
                numberOfPeople: 2
            }
        ]);
    });

    test("人数が0人のとき", () => {
        let totalAmount = 1000;
        let numberOfPeople = 0;
        let extra_info = {
            minimumAppreciationAmount: 100,
        }

        let expectedErrors = new ErrorArray();
        expectedErrors.push("精算係ありがとうオプション > message: 人数が1人未満になっています。");
        
        const errors = considerSettlement(totalAmount, numberOfPeople, extra_info);
        expect(errors).toEqual(expectedErrors);
    });

    test("人数が1人のとき", () => {
        let totalAmount = 1000;
        let numberOfPeople = 1;
        let extra_info = {
            minimumAppreciationAmount: 100,
        }
        
        const result = considerSettlement(totalAmount, numberOfPeople, extra_info);
        expect(result).toEqual([
            {
                payerCategory: payerCategory.settler,
                amount: 1000,
                numberOfPeople: 1
            }
        ]);
    });

    test("金額が0円のとき", () => {
        let totalAmount = 0;
        let numberOfPeople = 3;
        let extra_info = {
            minimumAppreciationAmount: 100,
        }

        let expectedErrors = new ErrorArray();
        expectedErrors.push("精算係ありがとうオプション > message: 会計金額が1円未満になっています。");
        
        const errors = considerSettlement(totalAmount, numberOfPeople, extra_info);
        expect(errors).toEqual(expectedErrors);
    });

    test("金額が1円のとき", () => {
        let totalAmount = 1;
        let numberOfPeople = 3;
        
        let extra_info = {
            minimumAppreciationAmount: 100,
        }
        
        const result = considerSettlement(totalAmount, numberOfPeople, extra_info);
        expect(result).toEqual([
            {
                payerCategory: payerCategory.settler,
                amount: 0,
                numberOfPeople: 1
            },
            {
                payerCategory: payerCategory.normal,
                amount: 1,
                numberOfPeople: 1
            },
            {
                payerCategory: payerCategory.normal,
                amount: 0,
                numberOfPeople: 1
            }
        ]);
    });
});