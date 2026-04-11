import { switchConsiderDifferenceOfPortion } from "../switches/switchConsiderDifferenceOfPortion.js";
import { switchConsiderSettlement } from "../switches/switchConsiderSettlement.js";
import { warikanOptionState } from "../state/WarikanOptionState.js";
import { switchPayALot } from "../switches/switchPayALot.js";
import { switchPayALittle } from "../switches/switchPayALittle.js";

class WarikanOptionStateExtractor {
    extractConsiderSettlement () {
        const considerSettlement = switchConsiderSettlement.getValue();
        warikanOptionState.setConsiderSettlement(considerSettlement);
    }

    extractConsiderDifferenceOfPortion () {
        const considerDifferenceOfPortion = switchConsiderDifferenceOfPortion.getValue();
        warikanOptionState.setConsiderDifferenceOfPortion(considerDifferenceOfPortion);
    }

    extractPayALot () {
        const payALot = switchPayALot.getValue();
        warikanOptionState.setPayALot(payALot);
    }

    extractPayALittle () {
        const payALittle = switchPayALittle.getValue();
        warikanOptionState.setPayALittle(payALittle);
    }
}

export const warikanOptionStateExtractor = new WarikanOptionStateExtractor();