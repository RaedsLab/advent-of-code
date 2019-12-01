const { CARGO_LIST } = require('./data');

const hrstart = process.hrtime();

let partOne = 0;
let partTwo = 0;

function getFuelForMass(mass) {
  return ~~(mass / 3) - 2;
}

function getFuelForFuel(fuel) {
  const additionalFuel = getFuelForMass(fuel);
  if (additionalFuel <= 0) {
    return;
  }
  partTwo += additionalFuel;
  getFuelForFuel(additionalFuel);
}

CARGO_LIST.forEach((cargo) => {
  const fuelForCargo = getFuelForMass(cargo);
  partOne += fuelForCargo;
  partTwo += fuelForCargo;
  getFuelForFuel(fuelForCargo);
});

const hrend = process.hrtime(hrstart);

console.log('Part one', partOne);
console.log('Part two', partTwo);

console.info('Execution time: %dms', hrend[1] / 1000000);
