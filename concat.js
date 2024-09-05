const first = 'Abid';
const last = 'Navid';

// const fullName = first + last;
const fullName = first + ' ' + last;
console.log(fullName);

const fullName2 = first.concat(last);
console.log(fullName2);

const fullName3 = first.concat(' ').concat(last);
console.log(fullName3);

const fullName4 = first.concat(' ', last);
console.log(fullName4);

// includes 
console.log(last.includes('d'));
console.log(last.includes('x'));

