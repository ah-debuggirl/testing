const assert = require('chai').assert;
const app = require('../app');
const income = app.gananciaNeta;

describe('App', function() {
    it('it should calculate the total income of a milkman', function() {
        let expected = 4756;
        let actual = income(300, 60);
        assert.equal(actual, expected);
    });
});

describe('App', function() {
    it('it should calculate the total income of a milkman', function() {
        let expected = 'Ingresa sólo números';
        let actual = income('trescientos', 60);
        assert.equal(actual, expected);
    });
})