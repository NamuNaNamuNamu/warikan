import { TextInput } from "../components/TextInput.js";
import { warikanContextExtractor } from "../controller/WarikanContextExtractor.js";

export const inputNumPeoplePayALot = new TextInput({
    htmlElement: () => document.getElementById("num-people-pay-a-lot"),
    onChange: () => { warikanContextExtractor.extractNumPeoplePayALot(); }
});