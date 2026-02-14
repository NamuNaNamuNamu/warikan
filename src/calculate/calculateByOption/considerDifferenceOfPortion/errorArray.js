export class ErrorArray {
    constructor() {
        this.errors = [];
    }

    push(errorMsg) {
        this.errors.push(errorMsg);
    }

    merge(errorArray) {
        this.errors = this.errors.concat(errorArray.all());
    }

    all() {
        return this.errors;
    }

    isEmpty() {
        return this.errors.length === 0;
    }

    isNotEmpty() {
        return !this.isEmpty();
    }
}