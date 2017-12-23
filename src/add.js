function add(a, b) {
    return a + b;
}

function addCallback (a, b, cb) {
    setTimeout(() => {
        if (isNaN(a) || isNaN(b)) return cb(new Error('Type error'));
        cb(null, a + b);
    }, 100);
}

module.exports = { add, addCallback };
