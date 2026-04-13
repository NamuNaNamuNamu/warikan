import { Switch } from "../components/Switch.js";
import { calculationResultRenderer } from "../controller/CalculationResultRenderer.js";
import { warikanCalculationExecutor } from "../controller/warikanCalculationExecutor.js";
import { warikanOptionStateExtractor } from "../controller/WarikanOptionStateExtractor.js";

export const switchConsiderSettlement = new Switch({
    htmlElement: () => document.getElementById("switch-consider-settlement"),
    onChange: () => { 
        warikanOptionStateExtractor.extractConsiderSettlement();
        const result = warikanCalculationExecutor.execute();
        calculationResultRenderer.render(result);
    }
});