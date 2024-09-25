const testVal1 = 'Volkswagen';
const testVal2 = 'volkswagen';

console.log(testVal1 === testVal2);
console.log(testVal1.toLowerCase() === testVal2);

const testFunc1 = () => {};
const testFunc2 = () => {};
const testFunc3 = testFunc1;

console.log(testFunc1 === testFunc2);
console.log(testFunc1 === testFunc3);
