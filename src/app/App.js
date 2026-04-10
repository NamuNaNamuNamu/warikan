import { buttonClickBinder } from "../core/ButtonClickBinder.js";
import { htmlInjector } from "../core/HtmlInjector.js";

export class App {
    start() {
        htmlInjector.injectAll();
        buttonClickBinder.bindAll();
    }
}