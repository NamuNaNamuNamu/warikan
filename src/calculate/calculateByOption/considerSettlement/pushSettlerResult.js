import { PayerCategory } from "../../../enum/PayerCategory.js";
import { pruneExcessElementFrom } from "../shared/pruneExcessElementFrom.js";

export function pushSettlerResult (result) {
    result.unshift(
        {
            payerCategory: PayerCategory.SETTLER,
            amount: 0,
            numberOfPeople: 1
        },
    );

    return pruneExcessElementFrom(result);
}