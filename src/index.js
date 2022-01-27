module.exports = function reverse (n) {
    n = Math.abs(n); // delete minus
    return n.toString().split('').reverse().join('');
}
