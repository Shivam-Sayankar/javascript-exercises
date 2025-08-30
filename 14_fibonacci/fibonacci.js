const fibonacci = function (n) {

    if (typeof n !== "number") n = parseInt(n)

    if (n < 0) return "OOPS"

    let a = 0
    let b = 1
    let fib = 0
    for (let i = 0; i < n; i++) {
        a = b;
        b = fib;
        fib = b + a
        // console.log(fib)
    }

    return fib;

    /*
    1  1  2  3  5  8  13
    a  b a+b
       a  b a+b
    */
};
fibonacci(6)
// Do not edit below this line
module.exports = fibonacci;
