import { TextInput } from "../components/TextInput.js";
import { warikanContextExtractor } from "../controller/WarikanContextExtractor.js";

export const inputAmountPayALittle = new TextInput({
    htmlElement: () => document.getElementById("amount-pay-a-little"),
    onChange: () => { warikanContextExtractor.extractAmountPayALittle(); }
});