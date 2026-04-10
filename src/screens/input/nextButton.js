import { Button } from "../../components/Button.js";
import { screenNavigator } from "../../core/ScreenNavigator.js";

const getSelectOptionScreen = () => document.getElementById("screen-select-option");

export const nextButton = new Button({
    htmlElement: () => document.getElementById("button-next"),
    onClick: () => {
        screenNavigator.navigateTo(getSelectOptionScreen());
    }
});