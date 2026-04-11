import { Switch } from "../components/Switch.js";
import { warikanOptionStateExtractor } from "../controller/WarikanOptionStateExtractor.js";

export const switchConsiderSettlement = new Switch({
    htmlElement: () => document.getElementById("switch-consider-settlement"),
    onChange: () => { warikanOptionStateExtractor.extractConsiderSettlement(); }
});