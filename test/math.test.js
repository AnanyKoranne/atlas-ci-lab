const test = require('node:test');
const assert = require('node:assert');
const { add, isEven, formatName } = require('../src/math');

test('add sums two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('isEven detects even numbers', () => {
  assert.strictEqual(isEven(4), true);
  assert.strictEqual(isEven(7), false);
});

test('formatName joins first and last', () => {
  assert.strictEqual(formatName('Ada', 'Lovelace'), 'Ada Lovelace');
});


// Tiny pure utility functions used by the CI lab.

// function add(a, b) {
//   return a - b;
// }

// function isEven(n) {
//   return n % 2 === 0;
// }

// function formatName(first, last) {
//   return `${first} ${last}`.trim();
// }

// module.exports = { add, isEven, formatName };
