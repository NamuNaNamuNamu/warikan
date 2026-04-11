import { TextInput } from "../../components/TextInput.js";

export const inputTotalAmount = new TextInput({
    htmlElement: () => document.getElementById("total-amount"),
});