const { CARGO_LIST } = require("./data");
let sum = 0;

CARGO_LIST.forEach(i => {
  const x = Math.floor(i / 3) - 2;
  sum += x;
});

console.log(sum);
