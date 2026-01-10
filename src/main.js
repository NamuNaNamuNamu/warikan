import { calculate } from "./calculate/calculate.js";
import { calculateOption } from "./enum/calculateOption.js";

let totalAmount = 9248;
let numberOfPeople = 3;

let extra_info = {
    minimumAppreciationAmount: 100, // 最大ありがとう額
    payALot: {
        amount: 3500,
        numberOfPeople: 2
    },
    // payALittle: {
    //     amount: 2000,
    //     numberOfPeople: 1
    // },
}

console.log(calculate(totalAmount, numberOfPeople, calculateOption.considerDifferenceOfPortion, extra_info));
