function getSum(n) {
  if (n === 0) {
    return 0;
  }
  return n + getSum(n - 1);
}
const sum = getSum(5);
console.log(sum);

// function ArraySum(arr) {
//   if (arr.length === 0) return 0;
//   return arr[0] + ArraySum(arr.slice(1, arr.length));
// }
let arr = [1, 2, 3, 4, 5, 6, 7];
function ArraySum(n) {
  if (n == 0) {
    return arr[0];
  }
  return arr[n] + ArraySum(n - 1);
}
// console.log(ArraySum([1, 2, 3, 4, 5]));

console.log(ArraySum(3));

function oddsum(arr) {
  if (arr.length === 0) return 0;
  if (arr[0] % 2 !== 0) {
    return arr[0] + oddsum(arr.slice(1, arr.length));
  } else {
    return oddsum(arr.slice(1, arr.length));
  }
}
console.log(oddsum([1, 2, 3, 4, 5, 6, 7]));

function fact(n) {
  if (n == 0) {
    return 1;
  }
  return n * fact(n - 1);
}
console.log(fact(5));
