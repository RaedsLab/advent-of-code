const { INTCODE } = require('./data');

const hrstart = process.hrtime();

const run = (n, v) => {
  const list = Array.from(INTCODE);
  list[1] = n;
  list[2] = v;
  let pos = 0;
  while (list[pos] !== 99) {
    const [op, pos1, pos2, pos3] = list.slice(pos, pos + 4);
    const a = list[pos1];
    const b = list[pos2];
    list[pos3] = op === 1 ? a + b : a * b;
    pos += 4;
  }
  return list[0];
};

const partOneFn = () => run(12, 2);

const partTwoFn = () => {
  const expected = 19690720;
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      const n = noun === 0 ? 12 : noun;
      const v = verb === 0 ? 2 : verb;
      if (run(n, v) === expected) {
        return 100 * noun + verb;
      }
    }
  }
  return null;
};

const partOne = partOneFn();
const partTwo = partTwoFn();
const hrend = process.hrtime(hrstart);

console.log('Part one', partOne);
console.log('Part two', partTwo);
console.info('Execution time: %dms', hrend[1] / 1000000);
