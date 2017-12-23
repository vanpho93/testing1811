function add(a, b) {
    return a + b;
}

function addCallback (a, b, cb) {
    setTimeout(() => {
        if (isNaN(a) || isNaN(b)) return cb(new Error('Type error'));
        cb(null, a + b);
    }, 100);
}

function addPromise (a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(a) || isNaN(b)) return reject(new Error('Type error'));
            resolve(a + b);
        }, 100);
    });
}

module.exports = { add, addCallback };
