const calcul = require('./app');
test('adds 1 + 2 to equal 3', () => {
  expect(calcul(1, 2)).toBe(3);
});

test('adds 15 + 2 to equal 17 (a > 10)', () => {
  expect(calcul(15, 2)).toBe(17);
});
