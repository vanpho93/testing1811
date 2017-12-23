const { add } = require('../src/add');
const assert = require('assert');

describe('Test add function', () => {
    it('Can add 2 numbers', () => {
        const total = add(4, 5);
        assert.equal(total, 9)
    });
    
    it('Can add 2 negative numbers', () => {
        const total = add(-4, -5);
        assert.equal(total, -9)
    });
});
