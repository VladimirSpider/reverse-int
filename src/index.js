module.exports = function reverse (n) {
  const positiveNumber = Math.abs(n);
  return Number(String(positiveNumber).split('').reverse().join(''));
}
