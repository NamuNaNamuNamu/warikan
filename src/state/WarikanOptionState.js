class WarikanOptionState {
    #considerSettlement;
    #considerDifferenceOfPortion;
    #payALot;
    #payALittle;

    constructor () {
        this.initialize();
    }

    initialize () {
        this.#considerSettlement = false;
        this.#considerDifferenceOfPortion = false;
        this.#payALot = false;
        this.#payALittle = false;
    }

    setConsiderSettlement (considerSettlement) {
        if (typeof considerSettlement !== "boolean") { throw new TypeError("considerSettlement must be boolean"); }

        this.#considerSettlement = considerSettlement;
    }

    getConsiderSettlement () {
        return this.#considerSettlement;
    }

    setConsiderDifferenceOfPortion (considerDifferenceOfPortion) {
        if (typeof considerDifferenceOfPortion !== "boolean") { throw new TypeError("considerDifferenceOfPortion must be boolean"); }

        this.#considerDifferenceOfPortion = considerDifferenceOfPortion;
    }

    getConsiderDifferenceOfPortion () {
        return this.#considerDifferenceOfPortion;
    }

    setPayALot (payALot) {
        if (typeof payALot !== "boolean") {
            throw new TypeError("payALot must be boolean");
        }

        this.#payALot = payALot;
    }

    getPayALot () {
        return this.#payALot;
    }

    setPayALittle (payALittle) {
        if (typeof payALittle !== "boolean") {
            throw new TypeError("payALittle must be boolean");
        }

        this.#payALittle = payALittle;
    }

    getPayALittle () {
        return this.#payALittle;
    }
}

export const warikanOptionState = new WarikanOptionState();