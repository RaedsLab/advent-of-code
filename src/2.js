const { CARGO_LIST } = require('./data');

let sum = 0;

function getFuelForMass(mass) {
  return Math.floor(mass / 3) - 2;
}

function getFuelForFuel(fuel) {
  const additionalFuel = getFuelForMass(fuel);
  if (additionalFuel <= 0) {
    return;
  }
  sum += additionalFuel;
  getFuelForFuel(additionalFuel);
}

CARGO_LIST.forEach((cargo) => {
  const fuelForCargo = getFuelForMass(cargo);
  sum += fuelForCargo;
  getFuelForFuel(fuelForCargo);
});

console.log(sum);
