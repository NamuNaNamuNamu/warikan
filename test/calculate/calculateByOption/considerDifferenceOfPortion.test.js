import { considerDifferenceOfPortion } from "../../../src/calculate/calculateByOption/considerDifferenceOfPortion";
import { payerCategory } from "../../../src/enum/payerCategory";

describe("飲食量考慮オプションのテスト", () => {
    test("通常パターン1", () => {
        let totalAmount = 16247;
        let numberOfPeople = 5;

        let extra_info = {
            payALot: {
                amount: 4000,
                numberOfPeople: 2
            },
            payALittle: {
                amount: 2000,
                numberOfPeople: 1
            },
        }
        
        const result = considerDifferenceOfPortion(totalAmount, numberOfPeople, extra_info);
        expect(result).toEqual([
            {
                payerCategory: payerCategory.payALot,
                amount: 4000,
                numberOfPeople: 2
            },
            {
                payerCategory: payerCategory.payALittle,
                amount: 2000,
                numberOfPeople: 1
            },
            {
                payerCategory: payerCategory.normal,
                amount: 3124,
                numberOfPeople: 1
            },
            {
                payerCategory: payerCategory.normal,
                amount: 3123,
                numberOfPeople: 1
            }
        ]);
    });
});