import { Button } from "../../components/Button.js";
import { screenNavigator } from "../../core/ScreenNavigator.js";

const getTitleScreen = () => document.getElementById("screen-title");

export const finishButton = new Button({
    htmlElement: () => document.getElementById("button-finish"),
    onClick: () => {
        screenNavigator.navigateTo(getTitleScreen());
    }
});