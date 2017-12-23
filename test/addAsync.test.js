const { addPromise } = require('../src/add');
const assert = require('assert');

describe.only('Test addPromise function with async', () => {
    it('Can add 2 numbers with addPromise function', async () => {
        const result = await addPromise(4, 5);
        assert.equal(result, 9);
    });

    it('Should throw error when pass 2 things NaN', async () => {
        try {
            const result = await addPromise('x', 5);
        } catch (err) {
            assert.equal(err.message, 'Type error');
        }
    });

    it('Should throw error', async () => {
        const result = await addPromise('x', 5).catch(err => null);
        assert.equal(result, null);
    });
});
