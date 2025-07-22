function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
let gen = numberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//Create a custom iterator called rangeIterator(start, end) that returns an object that iterates over numbers from start to end.

//Each call to .next() should return the next number in the range until it reaches end.


