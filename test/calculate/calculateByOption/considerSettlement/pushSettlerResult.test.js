import { pushSettlerResult } from "../../../../src/calculate/calculateByOption/considerSettlement/pushSettlerResult.js";
import { PayerCategory } from "../../../../src/enum/PayerCategory.js";

describe("pushSettlerResult() のテスト", () => {
    test("通常の使い方", () => {
        const normalResult = [
            {
                payerCategory: PayerCategory.NORMAL_ADJUSTER,
                amount: 1,
                numberOfPeople: 1
            },
            {
                payerCategory: PayerCategory.NORMAL,
                amount: 0,
                numberOfPeople: 1
            }
        ];

        const expectedResult = [
            {
                payerCategory: PayerCategory.SETTLER,
                amount: 0,
                numberOfPeople: 1
            },
            {
                payerCategory: PayerCategory.NORMAL_ADJUSTER,
                amount: 1,
                numberOfPeople: 1
            },
            {
                payerCategory: PayerCategory.NORMAL,
                amount: 0,
                numberOfPeople: 1
            }
        ];

        const result = pushSettlerResult(normalResult);
        expect(result).toEqual(expectedResult);
    });
});