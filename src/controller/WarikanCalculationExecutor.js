import { calculate } from "../calculate/calculate.js";
import { WarikanOption } from "../enum/WarikanOption.js";
import { warikanContext } from "../state/WarikanContext/WarikanContext.js";
import { warikanOptionState } from "../state/WarikanOptionState.js";

class WarikanCalculationExecutor {
    execute () {
        const totalAmount = warikanContext.getTotalAmount();
        const numberOfPeople = warikanContext.getNumPeople();
        const option = this.#judgeOption();
        const extra_info = {
            maximumAppreciationAmount: warikanContext.getMaximumAppreciationAmount(),
            payALot: {
                amount: warikanContext.getAmountPayALot(),
                numberOfPeople: warikanContext.getNumPeoplePayALot()
            },
            payALittle: {
                amount: warikanContext.getAmountPayALittle(),
                numberOfPeople: warikanContext.getNumPeoplePayALittle()
            },
        };

        return calculate(totalAmount, numberOfPeople, option, extra_info);
    }

    #judgeOption () {
        if (warikanOptionState.getConsiderSettlement()) {
            return WarikanOption.CONSIDER_SETTLEMENT;
        }
        return WarikanOption.NORMAL;
    }
}

export const warikanCalculationExecutor = new WarikanCalculationExecutor();