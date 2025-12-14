import { calculate } from "./calculate/calculate.js";
import { calculateOption } from "./enum/calculateOption.js";

let totalAmount = 7296
let numberOfPeople = 3

let extra_info = {
    minimumAppreciationAmount: 200, // 最大ありがとう額
    // payALot: {
    //     amount: 4000,
    //     numberOfPeople: 2
    // },
    // payALittle: {
    //     amount: 2000,
    //     numberOfPeople: 1
    // },
}

console.log(calculate(totalAmount, numberOfPeople, calculateOption.considerSettlement, extra_info));
