function add(a, b) {
    return a + b;
}

function addCallback (a, b, cb) {
    setTimeout(() => {
        if (isNaN(a) || isNaN(b)) return cb(new Error('Type error'));
        cb(null, a + b);
    }, 100);
}

addCallback(4, 5, (err, result) => {
    if (err) return console.log(err);
    console.log(result);
});

module.exports = { add };
