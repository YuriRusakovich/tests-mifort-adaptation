const chai = require('chai');
const assert = chai.assert;
const mocha = require('mocha');
const describe = mocha.describe;
const before = mocha.before;
const NumberValidator = require('../unit_test_1');


describe('isValid() for minimum border', function () {
    let validator;
    before(function () {
        validator = new NumberValidator(1);
    });
    it('should return true when value is greater than minimum border', function () {
        const isValid = validator.isValid(10);
        assert.isTrue(isValid, 'true');
    });

    it('should return false when value is lower than minimum border', function () {
        const isValid = validator.isValid(0);
        assert.isFalse(isValid, 'false');
    });
});

describe('isValid() for maximum border', function () {
    let validator;
    before(function () {
        validator = new NumberValidator(1, 9);
    });
    it('should return true when value is lower than maximum border', function () {
        const isValid = validator.isValid(8);
        assert.isTrue(isValid, 'true');
    });

    it('should return false when value is greater than maximum border', function () {
        const isValid = validator.isValid(11);
        assert.isFalse(isValid, 'false');
    });
});

describe('isValid() with type check', function () {
    let validator;
    before(function () {
        validator = new NumberValidator(1, 10, true);
    });
    it('should return true when value can be parsed to number', function () {
        const isValid = validator.isValid('10');
        assert.isTrue(isValid, 'true');
    });

    it('should return false when value cannot be parsed to number', function () {
        const isValid = validator.isValid('g');
        assert.isFalse(isValid, 'false');
    });
});

describe('isValid() with submitted', function () {
    let validator;
    before(function () {
        validator = new NumberValidator(1, 10, true);
    });
    it('should return true when submitted = false', function () {
        const isValid = validator.isValid('10');
        assert.isTrue(isValid, 'true');
    });

    it('should return false when submitted = true', function () {
        validator.setSubmitted();
        const isValid = validator.isValid('g');
        assert.isFalse(isValid, 'false');
    });
});
