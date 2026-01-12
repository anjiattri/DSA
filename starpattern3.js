function startPattern3(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + " " + (i + 1);
    }
    console.log(row);
  }
}
console.log(startPattern3(5));
