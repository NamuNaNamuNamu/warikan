import { switches } from "../switches/switches.js";

class SwitchChangeBinder {
    bindAll () {
        for (const sw of switches) {
            sw.startReceivingChange();
        }
    }
}

export const switchChangeBinder = new SwitchChangeBinder();