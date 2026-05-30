import { calculate } from "../calculate/calculate.js";
import { WarikanOption } from "../enum/WarikanOption.js";
import { warikanContext } from "../state/WarikanContext/WarikanContext.js";
import { warikanOptionState } from "../state/WarikanOptionState.js";

class WarikanCalculationExecutor {
    execute () {
        const totalAmount = warikanContext.getTotalAmount();
        const numberOfPeople = warikanContext.getNumPeople();
        const option = this.#judgeOption();
        const extraInfo = this.#getExtraInfo();

        return calculate(totalAmount, numberOfPeople, option, extraInfo);
    }

    #judgeOption () {
        // TODO: issue 17 (https://github.com/NamuNaNamuNamu/warikan/issues/17)
        if (warikanOptionState.getConsiderDifferenceOfPortion()) {
            return WarikanOption.CONSIDER_DIFFERENCE_OF_PORTION;
        }

        if (warikanOptionState.getConsiderSettlement()) {
            return WarikanOption.CONSIDER_SETTLEMENT;
        }
        return WarikanOption.NORMAL;
    }

    #getExtraInfo () {
        const extraInfo = {};

        if (warikanOptionState.getConsiderDifferenceOfPortion()) {
            if (warikanOptionState.getPayALot()) {
                extraInfo["payALot"] = {
                    amount: warikanContext.getAmountPayALot(),
                    numberOfPeople: warikanContext.getNumPeoplePayALot()
                };
            }

            if (warikanOptionState.getPayALittle()) {
                extraInfo["payALittle"] = {
                    amount: warikanContext.getAmountPayALittle(),
                    numberOfPeople: warikanContext.getNumPeoplePayALittle()
                };
            }
        }

        if (warikanOptionState.getConsiderSettlement()) {
            extraInfo["maximumAppreciationAmount"] = warikanContext.getMaximumAppreciationAmount();
        }

        return extraInfo;
    }
}

export const warikanCalculationExecutor = new WarikanCalculationExecutor();