//Write a program to find the length of a string without using the length property.

const findLength = (str) => {
  let count = 0;
  for (let char of str) count++;
  return count;
};
console.log(findLength("hello"));

