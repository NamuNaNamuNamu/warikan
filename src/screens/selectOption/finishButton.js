import { Button } from "../../components/Button.js";
import { screenNavigator } from "../../core/ScreenNavigator.js";
import { textInputInitializer } from "../../core/TextInputInitializer.js";
import { warikanContext } from "../../state/WarikanContext/WarikanContext.js";
import { warikanOptionState } from "../../state/WarikanOptionState.js";

const getTitleScreen = () => document.getElementById("screen-title");

export const finishButton = new Button({
    htmlElement: () => document.getElementById("button-finish"),
    onClick: () => {
        warikanContext.initialize();
        warikanOptionState.initialize();
        textInputInitializer.initializeAll();
        screenNavigator.navigateTo(getTitleScreen());
    }
});