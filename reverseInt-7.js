/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let rev = 0;
  let temp = x;
  x = Math.abs(x);
  while (x > 0) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
  }
  return temp < 0 ? -rev : rev;
};
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
