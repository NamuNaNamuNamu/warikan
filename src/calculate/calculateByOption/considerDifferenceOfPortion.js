import { payerCategory } from "../../enum/payerCategory.js";

export function considerDifferenceOfPortion(_totalAmount, _numberOfPeople, _extra_info){
    // TODO: to be implemented in branch "feature/additional_function".
    console.warn("STUB: considerDifferenceOfPortion() will be implemented in branch \"feature/additional_function\"");

    return [
        {
            payerCategory: payerCategory.payALot,
            amount: 1111,
            numberOfPeople: 1
        },
        {
            payerCategory: payerCategory.payALittle,
            amount: 888,
            numberOfPeople: 2
        },
        {
            payerCategory: payerCategory.normal,
            amount: 999,
            numberOfPeople: 2
        }
    ];
}