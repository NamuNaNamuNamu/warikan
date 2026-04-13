import { TextInput } from "../components/TextInput.js";
import { calculationResultRenderer } from "../controller/CalculationResultRenderer.js";
import { warikanCalculationExecutor } from "../controller/warikanCalculationExecutor.js";
import { warikanContextExtractor } from "../controller/WarikanContextExtractor.js";

export const inputMaximumAppreciationAmount = new TextInput({
    htmlElement: () => document.getElementById("maximum-appreciation-amount"),
    onChange: () => { 
        warikanContextExtractor.extractMaximumAppreciationAmount();
        const result = warikanCalculationExecutor.execute();
        calculationResultRenderer.render(result);
    }
});