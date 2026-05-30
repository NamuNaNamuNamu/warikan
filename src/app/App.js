import { buttonClickBinder } from "../core/ButtonClickBinder.js";
import { htmlInjector } from "../core/HtmlInjector.js";
import { switchChangeBinder } from "../core/SwitchChangeBinder.js";
import { textInputBinder } from "../core/TextInputBinder.js";

export class App {
    start() {
        htmlInjector.injectAll();
        buttonClickBinder.bindAll();
        switchChangeBinder.bindAll();
        textInputBinder.bindAll();
    }
}