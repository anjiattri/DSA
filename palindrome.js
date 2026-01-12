/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let temp = x;
  let rev = 0;
  if (x < 0) {
    return false;
  }
  while (x > 0) {
    let last = x % 10;
    rev = 10 * rev + last;
    x = Math.floor(x / 10);
  }
  if (rev === temp) return true;
  else return false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
