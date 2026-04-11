import { Switch } from "../components/Switch.js";
import { warikanOptionStateExtractor } from "../controller/WarikanOptionStateExtractor.js";

export const switchConsiderDifferenceOfPortion = new Switch({
    htmlElement: () => document.getElementById("switch-consider-difference-of-portion"),
    onChange: () => { warikanOptionStateExtractor.extractConsiderDifferenceOfPortion(); }
});