import { TextInput } from "../../components/TextInput.js";
import { warikanContextExtractor } from "../../controller/WarikanContextExtractor.js";

export const inputNumPeoplePayALittle = new TextInput({
    htmlElement: () => document.getElementById("num-people-pay-a-little"),
    onChange: () => { warikanContextExtractor.extractNumPeoplePayALittle(); }
});