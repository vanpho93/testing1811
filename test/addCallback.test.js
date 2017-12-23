const { addCallback } = require('../src/add');
const assert = require('assert');

describe('Test addCallback function', () => {
    it('Can add 2 numbers with addCallback function', (done) => {
        addCallback(4, 5, (err, result) => {
            assert.equal(err, null);
            assert.equal(result, 9);
            done();
        });
    });

    it('Should throw error when pass 2 things NaN', (done) => {
        addCallback('x', 5, (err, result) => {
            assert.equal(err.message, 'Type error');
            assert.equal(result, undefined);
            done();
        });
    });
});
