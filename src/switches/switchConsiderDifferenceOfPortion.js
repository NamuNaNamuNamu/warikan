import { Switch } from "../components/Switch.js";
import { calculationResultRenderer } from "../controller/CalculationResultRenderer.js";
import { warikanCalculationExecutor } from "../controller/warikanCalculationExecutor.js";
import { warikanOptionStateExtractor } from "../controller/WarikanOptionStateExtractor.js";

export const switchConsiderDifferenceOfPortion = new Switch({
    htmlElement: () => document.getElementById("switch-consider-difference-of-portion"),
    onChange: () => { 
        warikanOptionStateExtractor.extractConsiderDifferenceOfPortion();
        const result = warikanCalculationExecutor.execute();
        calculationResultRenderer.render(result);
    }
});