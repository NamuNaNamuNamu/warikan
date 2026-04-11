import { Button } from "../../components/Button.js";
import { warikanContextExtractor } from "../../controller/WarikanContextExtractor.js";
import { screenNavigator } from "../../core/ScreenNavigator.js";

const getSelectOptionScreen = () => document.getElementById("screen-select-option");

export const nextButton = new Button({
    htmlElement: () => document.getElementById("button-next"),
    onClick: () => {
        warikanContextExtractor.extractFromInputScreen();
        screenNavigator.navigateTo(getSelectOptionScreen());
    }
});