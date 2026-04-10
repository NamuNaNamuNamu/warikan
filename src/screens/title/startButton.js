import { Button } from "../../components/Button.js";
import { screenNavigator } from "../../core/ScreenNavigator.js";

const getInputScreen = () => document.getElementById("screen-input");

export const startButton = new Button({
    htmlElement: () => document.getElementById("button-start"),
    onClick: () => {
        screenNavigator.navigateTo(getInputScreen());
    }
});