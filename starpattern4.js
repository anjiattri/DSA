function startPattern4(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + " " + j;
    }
    console.log(row);
  }
}
console.log(startPattern4(5));
