import { calculate } from "./calculate/calculate.js";
import { calculateOption } from "./enum/calculateOption.js";
import { screenSelector } from "./screenSeletor.js";

let totalAmount = 2366;
let numberOfPeople = 4;
let extra_info = {};
console.log(calculate(totalAmount, numberOfPeople, calculateOption.normal, extra_info));

screenSelector();