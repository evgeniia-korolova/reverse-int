module.exports = function reverse (n) {
     let number = Math.abs(n.toString());
     let string = number.toString();
     return Number(string.split("").reverse().join(""));
    
}
