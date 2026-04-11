import { switches } from "../switches/switches.js";

class SwitchInitializer {
    initializeAll () {
        for (const sw of switches) {
            sw.initialize();
        }
    }
}

export const switchInitializer = new SwitchInitializer();