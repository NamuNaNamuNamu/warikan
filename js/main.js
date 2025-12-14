import { calculate } from "./calculate/calculate.js";
import { calculateOption } from "./enum/calculateOption.js";

let totalAmount = 2366
let numberOfPeople = 4
let minimumAppreciationAmount = 100 // 最大ありがとう額
console.log(calculate(totalAmount, numberOfPeople, calculateOption.normal));