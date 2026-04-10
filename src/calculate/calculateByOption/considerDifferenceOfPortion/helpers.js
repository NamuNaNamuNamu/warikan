import { PayerCategory } from "../../../enum/PayerCategory.js";

export function updateRemainderPayALot(remainder, extra_info) {
    remainder.amount -= extra_info.payALot.amount * extra_info.payALot.numberOfPeople;
    remainder.numberOfPeople -= extra_info.payALot.numberOfPeople;
}

export function updateRemainderPayALittle(remainder, extra_info) {
    remainder.amount -= extra_info.payALittle.amount * extra_info.payALittle.numberOfPeople;
    remainder.numberOfPeople -= extra_info.payALittle.numberOfPeople;
}

export function getResultPayALot(extra_info) {
    return {
        payerCategory: PayerCategory.PAY_A_LOT,
        amount: extra_info.payALot.amount,
        numberOfPeople: extra_info.payALot.numberOfPeople
    }
}

export function getResultPayALittle(extra_info) {
    return {
        payerCategory: PayerCategory.PAY_A_LITTLE,
        amount: extra_info.payALittle.amount,
        numberOfPeople: extra_info.payALittle.numberOfPeople
    }
}