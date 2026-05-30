import { Switch } from "../components/Switch.js";
import { calculationResultRenderer } from "../controller/CalculationResultRenderer.js";
import { warikanCalculationExecutor } from "../controller/warikanCalculationExecutor.js";
import { warikanOptionStateExtractor } from "../controller/WarikanOptionStateExtractor.js";

export const switchPayALittle = new Switch({
    htmlElement: () => document.getElementById("switch-pay-a-little"),
    onChange: () => {
        warikanOptionStateExtractor.extractPayALittle();
        const result = warikanCalculationExecutor.execute();
        calculationResultRenderer.render(result);
    }
});