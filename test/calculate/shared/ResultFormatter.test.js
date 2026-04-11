import { resultFormatter } from "../../../src/calculate/calculateByOption/shared/ResultFormatter.js";
import { getPayerCategoryKey, PayerCategory } from "../../../src/enum/PayerCategory.js";

describe("ResultFormatter のテスト", () => {
    test("format() のテスト", () => {
        const resultCalculation = [
            {
                payerCategory: PayerCategory.NORMAL_ADJUSTER,
                amount: 1001,
                numberOfPeople: 3
            },
            {
                payerCategory: PayerCategory.NORMAL,
                amount: 1000,
                numberOfPeople: 2
            }
        ];

        const expectedResult = {
            [getPayerCategoryKey(PayerCategory.NORMAL_ADJUSTER)]: {
                payerCategory: PayerCategory.NORMAL_ADJUSTER,
                amount: 1001,
                numberOfPeople: 3
            },
            [getPayerCategoryKey(PayerCategory.NORMAL)]: {
                payerCategory: PayerCategory.NORMAL,
                amount: 1000,
                numberOfPeople: 2
            }
        }

        const result = resultFormatter.format(resultCalculation);
        expect(result).toEqual(expectedResult);
    });

    test("parse() のテスト", () => {
        const resultFormatting = {
            [getPayerCategoryKey(PayerCategory.NORMAL_ADJUSTER)]: {
                payerCategory: PayerCategory.NORMAL_ADJUSTER,
                amount: 1001,
                numberOfPeople: 3
            },
            [getPayerCategoryKey(PayerCategory.NORMAL)]: {
                payerCategory: PayerCategory.NORMAL,
                amount: 1000,
                numberOfPeople: 2
            }
        }

        const expectedResult = [
            {
                payerCategory: PayerCategory.NORMAL_ADJUSTER,
                amount: 1001,
                numberOfPeople: 3
            },
            {
                payerCategory: PayerCategory.NORMAL,
                amount: 1000,
                numberOfPeople: 2
            }
        ];

        const result = resultFormatter.parse(resultFormatting);
        expect(result).toEqual(expectedResult);
    });
});