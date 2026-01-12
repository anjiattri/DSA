function countDigits(n) {
  let count = 0;
  if (n === 0) return 1;

  n = Math.abs(n);
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
}
console.log(countDigits(1234));
console.log(countDigits(-298));
console.log(countDigits(0));
