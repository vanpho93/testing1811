const { addPromise } = require('../src/add');
const assert = require('assert');

describe('Test addPromise function', () => {
    it('Can add 2 numbers with addPromise function', (done) => {
        addPromise(4, 5)
        .then(result => {
            assert.equal(result, 9);
            done();
        });
    });

    it('Should throw error when pass 2 things NaN', (done) => {
        addPromise('x', 5)
        .catch(err => {
            assert.equal(err.message, 'Type error');
            done();
        });
    });
});
