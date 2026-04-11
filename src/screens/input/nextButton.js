import { Button } from "../../components/Button.js";
import { calculationResultRenderer } from "../../controller/CalculationResultRenderer.js";
import { warikanCalculationExecutor } from "../../controller/warikanCalculationExecutor.js";
import { warikanContextExtractor } from "../../controller/WarikanContextExtractor.js";
import { screenNavigator } from "../../core/ScreenNavigator.js";

const getSelectOptionScreen = () => document.getElementById("screen-select-option");

export const nextButton = new Button({
    htmlElement: () => document.getElementById("button-next"),
    onClick: () => {
        warikanContextExtractor.extractFromInputScreen();
        const result = warikanCalculationExecutor.execute();
        calculationResultRenderer.render(result);
        screenNavigator.navigateTo(getSelectOptionScreen());
    }
});