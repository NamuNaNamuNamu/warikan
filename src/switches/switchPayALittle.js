import { Switch } from "../components/Switch.js";
import { warikanOptionStateExtractor } from "../controller/WarikanOptionStateExtractor.js";

export const switchPayALittle = new Switch({
    htmlElement: () => document.getElementById("switch-pay-a-little"),
    onChange: () => { warikanOptionStateExtractor.extractPayALittle(); }
});