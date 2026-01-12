function startPattern5(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + " *";
    }
    console.log(row);
  }
}
console.log(startPattern5(5));
