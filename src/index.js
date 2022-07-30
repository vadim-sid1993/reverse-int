module.exports = function reverse (n) {
    let str = String(n).split('').reverse();
    let x = str.length-1;
    if (str[0] == '0') {
        str.splice(0, 1);
    };
    if (str[x] == '-') {
       str.splice(x, 1);
    };
            let nbr = Number(str.join(''));
            return nbr
}
