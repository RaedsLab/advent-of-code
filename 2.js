const { CARGO_LIST } = require("./data");
let sum = 0;

function getFuilForMass(mass) {
  return Math.floor(mass / 3) - 2;
}

function getFuilForFuil(fuil) {
  const additionalFuil = getFuilForMass(fuil);
  if (additionalFuil <= 0) {
    return;
  }
  sum += additionalFuil;
  getFuilForFuil(additionalFuil);
}

CARGO_LIST.forEach(cargo => {
  const fuilForCargo = getFuilForMass(cargo);
  sum += fuilForCargo;
  getFuilForFuil(fuilForCargo);
});

console.log(sum);
