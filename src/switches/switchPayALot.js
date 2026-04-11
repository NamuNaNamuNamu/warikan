import { Switch } from "../components/Switch.js";
import { warikanOptionStateExtractor } from "../controller/WarikanOptionStateExtractor.js";

export const switchPayALot = new Switch({
    htmlElement: () => document.getElementById("switch-pay-a-lot"),
    onChange: () => { warikanOptionStateExtractor.extractPayALot(); }
});