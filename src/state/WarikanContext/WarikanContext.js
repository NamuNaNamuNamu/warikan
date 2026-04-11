// 合計金額、人数などワリカン計算に必要な情報を管轄

class WarikanContext {
    #totalAmount;
    #numPeople;
    #maximumAppreciationAmount;
    #payALot;
    #payALittle;

    constructor () {
        this.initialize();
    }

    initialize () {
        this.#totalAmount = null;
        this.#numPeople = null
        this.#maximumAppreciationAmount = null
        this.#payALot = { amount: null, numPeople: null };
        this.#payALittle = { amount: null, numPeople: null };
    }

    setTotalAmount (amount) {
        this.#totalAmount = amount;
    }

    getTotalAmount () {
        return this.#totalAmount;
    }

    setNumPeople (numPeople) {
        this.#numPeople = numPeople;
    }

    getNumPeople () {
        return this.#numPeople;
    }

    setMaximumAppreciationAmount (amount) {
        this.#maximumAppreciationAmount = amount;
    }

    getMaximumAppreciationAmount () {
        return this.#maximumAppreciationAmount;
    }

    setAmountPayALot (amount) {
        this.#payALot.amount = amount;
    }

    getAmountPayALot () {
        return this.#payALot.amount;
    }

    setNumPeoplePayALot (numPeople) {
        this.#payALot.numPeople = numPeople;
    }

    getNumPeoplePayALot () {
        return this.#payALot.numPeople;
    }

    setAmountPayALittle (amount) {
        this.#payALittle.amount = amount;
    }

    getAmountPayALittle () {
        return this.#payALittle.amount;
    }

    setNumPeoplePayALittle (numPeople) {
        this.#payALittle.numPeople = numPeople;
    }

    getNumPeoplePayALittle () {
        return this.#payALittle.numPeople;
    }

    getPayALot () {
        return { ...this.#payALot };
    }

    getPayALittle () {
        return { ...this.#payALittle };
    }
}

export const warikanContext = new WarikanContext();