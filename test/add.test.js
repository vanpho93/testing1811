const { add } = require('../src/add');
const assert = require('assert');

it('Can add 2 numbers', () => {
    const total = add(4, 5);
    assert.equal(total, 9)
});
