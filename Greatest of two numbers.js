/*
 * Greatest of two numbers
 * Created with Copilot
 * Usage:
 *  - Node: run `node "Greatest of two numbers.js"`
 *  - Browser: include the file in an HTML page and call demoPrompt()
 */

/**
 * Returns the greatest of two numeric values.
 * If arguments are not numbers, throws TypeError.
 * If values are equal, returns either value.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function greatestOfTwo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  return a >= b ? a : b;
}

// --- Example (Node) ---
if (typeof process !== 'undefined' && process.release && process.release.name === 'node') {
  // Quick demo when run with Node
  const args = process.argv.slice(2).map(Number);
  if (args.length === 2) {
    const [x, y] = args;
    if (Number.isNaN(x) || Number.isNaN(y)) {
      console.log('Please provide two numeric arguments.');
    } else {
      console.log(`Greatest of ${x} and ${y} is ${greatestOfTwo(x, y)}`);
    }
  } else {
    console.log('Examples:');
    console.log('  greatestOfTwo(5, 10) ->', greatestOfTwo(5, 10));
    console.log('  greatestOfTwo(-3, -7) ->', greatestOfTwo(-3, -7));
    console.log('\nYou can also run: node "Greatest of two numbers.js" 5 10');
  }
}

// --- Browser helper ---
/**
 * Prompts the user for two numbers and shows the result in an alert (browser only).
 */
function demoPrompt() {
  if (typeof window === 'undefined' || typeof prompt !== 'function') {
    console.warn('demoPrompt() is intended to run in a browser environment.');
    return;
  }
  const a = Number(prompt('Enter the first number:'));
  const b = Number(prompt('Enter the second number:'));
  if (Number.isNaN(a) || Number.isNaN(b)) {
    alert('Please enter valid numbers.');
    return;
  }
  alert(`The greatest of ${a} and ${b} is ${greatestOfTwo(a, b)}.`);
}

// Export for CommonJS (Node) and attach to window in browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = greatestOfTwo;
} else if (typeof window !== 'undefined') {
  window.greatestOfTwo = greatestOfTwo;
  window.demoPrompt = demoPrompt;
}
