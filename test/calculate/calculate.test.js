import { calculate } from "../../src/calculate/calculate.js";
import { CalculateOption } from "../../src/enum/CalculateOption.js";
import { normal } from "../../src/calculate/calculateByOption/normal.js";
import { considerSettlement } from "../../src/calculate/calculateByOption/considerSettlement.js";
import { considerDifferenceOfPortion } from "../../src/calculate/calculateByOption/considerDifferenceOfPortion.js";

// 各計算方式をモック
jest.mock("../../src/calculate/calculateByOption/normal.js", () => {
    return {
        normal: jest.fn(() => "モック済み計算結果")
    };
});

jest.mock("../../src/calculate/calculateByOption/considerSettlement.js", () => {
    return {
        considerSettlement: jest.fn(() => "モック済み計算結果")
    };
});

jest.mock("../../src/calculate/calculateByOption/considerDifferenceOfPortion.js", () => {
    return {
        considerDifferenceOfPortion: jest.fn(() => "モック済み計算結果")
    };
});

describe("calculate 関数の条件分岐テスト", () => {
    test("通常の計算方法", () => {
        let totalAmount = 10000;
        let numberOfPeople = 3;
        let option = CalculateOption.NORMAL;
        let extra_info = {};

        const _unusedValue = calculate(totalAmount, numberOfPeople, option, extra_info);
        expect(normal).toHaveBeenCalledWith(totalAmount, numberOfPeople);
    });

    test("精算係ありがとうオプション", () => {
        let totalAmount = 9248;
        let numberOfPeople = 3;
        let option = CalculateOption.CONSIDER_SETTLEMENT;
        let extra_info = {
            maximumAppreciationAmount: 100, // 最大ありがとう額
        };

        const _unusedValue = calculate(totalAmount, numberOfPeople, option, extra_info);
        expect(considerSettlement).toHaveBeenCalledWith(totalAmount, numberOfPeople, extra_info);
    });

    test("飲食量考慮オプション", () => {
        let totalAmount = 16247;
        let numberOfPeople = 5;
        let option = CalculateOption.CONSIDER_DIFFERENCE_OF_PORTION;
        let extra_info = {
            payALot: {
                amount: 4000,
                numberOfPeople: 2
            },
            payALittle: {
                amount: 2000,
                numberOfPeople: 1
            },
        };

        const _unusedValue = calculate(totalAmount, numberOfPeople, option, extra_info);
        expect(considerDifferenceOfPortion).toHaveBeenCalledWith(totalAmount, numberOfPeople, extra_info);
    });

    test("上記以外のオプション", () => {
        let totalAmount = 10000;
        let numberOfPeople = 3;
        let option = "unexpected option";
        let extra_info = {};

        expect(() => calculate(totalAmount, numberOfPeople, option, extra_info)).toThrow("Selected option is not defined.");
    })
});