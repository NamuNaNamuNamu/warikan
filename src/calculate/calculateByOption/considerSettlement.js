import { payerCategory } from "../../enum/payerCategory.js"

export function considerSettlement(_totalAmount, _numberOfPeople, _extra_info){
    // TODO: to be implemented in branch "feature/additional_function".
    console.warn("STUB: considerSettlement() will be implemented in branch \"feature/additional_function\"");

    return [
        {
            payerCategory: payerCategory.settler,
            amount: 999,
            numberOfPeople: 1
        },
        {
            payerCategory: payerCategory.normal,
            amount: 1111,
            numberOfPeople: 2
        }
    ]
}