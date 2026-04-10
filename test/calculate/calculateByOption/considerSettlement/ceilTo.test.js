import { ceilTo } from "../../../../src/calculate/calculateByOption/considerSettlement/ceilTo.js";

describe("飲食量考慮オプションのテスト", () => {
    test("100 を単位に切り上げ", () => {
        const result = ceilTo(424, { unit: 100 });
        expect(result).toEqual(500);
    });

    test("200 を単位に切り上げ", () => {
        const result = ceilTo(424, { unit: 200 });
        expect(result).toEqual(600);
    });

    test("50 を単位に切り上げ", () => {
        const result = ceilTo(424, { unit: 50 });
        expect(result).toEqual(450);
    });
});