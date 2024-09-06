// 1. using an object literal
const pen = { brand: 'econo', price: 10, color: 'black' }

// 2. define an object constructor. Then create objects of the constructed type.
const pencil = new Object()
console.log(pencil);

// 3. using Object.create()
const rubber = Object.create({});
console.log(rubber);

// 4. using new keyword


// example 01
const lightPen = new Object();
lightPen.color = 'yellow';
lightPen.length = 7.5;
lightPen.type = 'mechanical';
console.log(lightPen);

