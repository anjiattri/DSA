function starPattern6(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let k = 0; k < n - i; k++) {
      row += " ";
    }
    for (let j = 0; j <= i; j++) {
      row += "*";
    }

    console.log(row);
  }
}
// function starPattern6(n) {
//   for (let i = n; i > 0; i--) {
//     let row = "";
//     for (let k = 0; k < i - 1; k++) {
//       row += " ";
//     }
//     for (let j = 0; j <= n - i; j++) {
//       row += "*";
//     }

//     console.log(row);
//   }
// }
console.log(starPattern6(5));
