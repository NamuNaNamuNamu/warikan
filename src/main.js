import { calculate } from "./calculate/calculate.js";
import { calculateOption } from "./enum/calculateOption.js";
import { screenSelector } from "./screenSeletor.js";

let totalAmount = 16247;
let numberOfPeople = 5;

let extra_info = {
    minimumAppreciationAmount: 100, // 最大ありがとう額
    payALot: {
        amount: 4000,
        numberOfPeople: 2
    },
    payALittle: {
        amount: 2000,
        numberOfPeople: 1
    },
}

console.log(calculate(totalAmount, numberOfPeople, calculateOption.considerDifferenceOfPortion, extra_info));

screenSelector();