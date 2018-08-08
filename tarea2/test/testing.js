const assert = require('chai').assert;
const app = require('../app');
const average = app.computeAverageLengthOfWords;

describe('App', function() {
    it('It should compute the average of two words length', function() {
        let expected = 13.5;
        let actual = average('parangaricutirimicuaro', 'mundo');
        assert.equal(actual, expected);
    });
});