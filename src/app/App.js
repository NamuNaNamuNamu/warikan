import { ScreenManager } from "../core/ScreenManager.js";

export class App {
    constructor() {
        this.screenManager = new ScreenManager();
    }

    start() {
        this.screenManager.activate();
    }
}