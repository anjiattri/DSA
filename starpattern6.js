function starPattern6(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let k = i; k < n - 1; k++) {
      row += " ";
    }
    for (let j = 0; j <= i; j++) {
      row += "*";
    }

    console.log(row);
  }
}
console.log(starPattern6(5));
