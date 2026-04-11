// 合計金額、人数などワリカン計算に必要な情報を管轄

class WarikanContext {
    #totalAmount;
    #numPeople;
    #maximumAppreciationAmount;
    #payALot;
    #payALittle;

    constructor ({
        totalAmount = null,
        numPeople = null,
        maximumAppreciationAmount = null,
        payALot = {},
        payALittle = {}
    } = {}) {
        this.setTotalAmount(totalAmount);
        this.setNumPeople(numPeople);
        this.setMaximumAppreciationAmount(maximumAppreciationAmount)
        this.setPayALotAmount(payALot.amount ?? null);
        this.setPayALotNumPeople(payALot.numPeople ?? null);
        this.setPayALittleAmount(payALittle.amount ?? null);
        this.setPayALittleNumPeople(payALittle.numPeople ?? null);
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

    setPayALotAmount (amount) {
        this.#payALot.amount = amount;
    }

    getPayALotAmount () {
        return this.#payALot.amount;
    }

    setPayALotNumPeople (numPeople) {
        this.#payALot.numPeople = numPeople;
    }

    getPayALotNumPeople () {
        return this.#payALot.numPeople;
    }

    setPayALittleAmount (amount) {
        this.#payALittle.amount = amount;
    }

    getPayALittleAmount () {
        return this.#payALittle.amount;
    }

    setPayALittleNumPeople (numPeople) {
        this.#payALittle.numPeople = numPeople;
    }

    getPayALittleNumPeople () {
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