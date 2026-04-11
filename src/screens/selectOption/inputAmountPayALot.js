import { TextInput } from "../../components/TextInput.js";
import { warikanContextExtractor } from "../../controller/WarikanContextExtractor.js";

export const inputAmountPayALot = new TextInput({
    htmlElement: () => document.getElementById("amount-pay-a-lot"),
    onChange: () => { warikanContextExtractor.extractAmountPayALot(); }
});