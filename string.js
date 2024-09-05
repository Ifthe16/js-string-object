// types of string
const country = 'Bangladesh';
const division = "Newkhale";
const district = `B-Baria`;
const thana = new String('Demra');

console.log(typeof country);
console.log(typeof division);
console.log(typeof district);
console.log(typeof thana);


// string vs array
const numbers = [54, 98, 78, 21, 65];
console.log(numbers);
numbers[1] = 11;
console.log(numbers);
console.log(numbers.length);
console.log(numbers[0]);
console.log(numbers[1]);


// string is immutable --> not changeable
// array is mutable --> you can change the array elements

const capital = 'Dhaka';
console.log(capital.length);
console.log(capital[0]);
console.log(capital[1]);
console.log(capital[2]);
console.log(capital[3]);
console.log(capital);
capital[0] = 'F';
console.log(capital);