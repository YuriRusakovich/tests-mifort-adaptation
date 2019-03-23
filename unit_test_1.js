'use strict';

class NumberValidator {

    constructor(minimum, maximum, acceptString = false, immediateValidate = false) {
        this.isSubmitted = immediateValidate;
        this.acceptString = acceptString;
        this.minimum = minimum;
        this.maximum = maximum;
    }

    setSubmitted() {
        this.isSubmitted = true;
    }

    isValid(value) {
        if (this.isSubmitted) {
            return false;
        }

        if (!this.isWrongType(value)) {
            return false;
        }

        parseFloat(value);

        if (!this.maximum) {
            return value >= this.minimum;
        }

        return value >= this.minimum && value <= this.maximum;
    }

    isWrongType(value) {
        if (this.acceptString) {
            const acceptableString = this.acceptString && typeof value === "string";
            return acceptableString && typeof (parseFloat(value)) === "number" && !isNaN(parseFloat(value));
        }
        return true;
    }
}

module.exports = NumberValidator;