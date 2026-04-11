import { TextInput } from "../../components/TextInput.js";
import { warikanContextExtractor } from "../../controller/WarikanContextExtractor.js";

export const inputMaximumAppreciationAmount = new TextInput({
    htmlElement: () => document.getElementById("maximum-appreciation-amount"),
    onChange: () => { warikanContextExtractor.extractMaximumAppreciationAmount(); }
});