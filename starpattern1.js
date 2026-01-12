// n=4

// * * * *
// * * * *
// * * * *
// * * * *

function star1(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += " *";
    }
    console.log(row);
  }
}
let n = 4;
console.log(star1(n));
console.log(star1(5));
