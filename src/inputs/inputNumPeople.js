import { TextInput } from "../components/TextInput.js";

export const inputNumPeople = new TextInput({
    htmlElement: () => document.getElementById("num-people"),
});