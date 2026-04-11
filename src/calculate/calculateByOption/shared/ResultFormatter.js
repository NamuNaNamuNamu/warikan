// NOTE: もうすでに作ってしまった各計算ロジックの出力結果を扱いやすくするためのクラス
// body に既存の出力結果を入れる。

import { getPayerCategoryKey } from "../../../enum/PayerCategory.js";

class ResultFormatter {
    format (result) {
        const formattedResult = {};

        for (let resultElement of result) {
            formattedResult[getPayerCategoryKey(resultElement.payerCategory)] = resultElement;
        }

        return formattedResult;
    }

    parse (formattedResult) {
        const parsedResult = [];

        for (let resultElement of Object.values(formattedResult)) {
            parsedResult.push(resultElement);
        }

        return parsedResult;
    }
}

export const resultFormatter = new ResultFormatter();